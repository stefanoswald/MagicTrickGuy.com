// Turns Stefan's free/busy calendar feed (iCalendar text) into open time windows per day.
// Shared by the /api/availability function and its tests. Nothing here keeps event names:
// only start and end times are read.
import ICAL from "ical.js";

export const TIME_ZONE = "America/New_York";
/** Bookable hours each day, Eastern: 11 AM to 11 PM. Everything outside is always unavailable. */
export const DAY_START_MINUTES = 11 * 60;
export const DAY_END_MINUTES = 23 * 60;
/** Openings shorter than this are not shown (most events need at least two hours). */
export const MIN_WINDOW_MINUTES = 120;
export const DAYS_AHEAD = 366;

const MINUTE = 60_000;
const QUARTER_HOUR = 15 * MINUTE;
const DAY = 24 * 60 * MINUTE;

const formatters = new Map();
function partsFormatter(tz) {
  let f = formatters.get(tz);
  if (!f) {
    f = new Intl.DateTimeFormat("en-US", {
      timeZone: tz,
      hourCycle: "h23",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
    formatters.set(tz, f);
  }
  return f;
}

/** Wall-clock parts of an instant in a time zone. */
export function zonedParts(ms, tz = TIME_ZONE) {
  const p = {};
  for (const { type, value } of partsFormatter(tz).formatToParts(new Date(ms))) p[type] = value;
  return { y: +p.year, m: +p.month, d: +p.day, h: +p.hour % 24, mi: +p.minute, s: +p.second };
}

function offsetAt(ms, tz) {
  const p = zonedParts(ms, tz);
  return Date.UTC(p.y, p.m - 1, p.d, p.h, p.mi, p.s) - Math.floor(ms / 1000) * 1000;
}

/** The instant when the wall clock in `tz` shows the given date and time. */
export function zonedTimeToUtc(y, m, d, h = 0, mi = 0, s = 0, tz = TIME_ZONE) {
  const guess = Date.UTC(y, m - 1, d, h, mi, s);
  const first = guess - offsetAt(guess, tz);
  const second = guess - offsetAt(first, tz);
  return second;
}

function isValidZone(tz) {
  try {
    partsFormatter(tz);
    return true;
  } catch {
    return false;
  }
}

/** Converts an ICAL.Time (date-time) to epoch milliseconds, treating floating times as Eastern. */
function timeToMs(t) {
  const zoneId = (t.zone && t.zone.tzid) || t.timezone || null;
  if (zoneId === "UTC" || zoneId === "Z") return Date.UTC(t.year, t.month - 1, t.day, t.hour, t.minute, t.second);
  if (zoneId && zoneId !== "floating" && isValidZone(zoneId)) {
    return zonedTimeToUtc(t.year, t.month, t.day, t.hour, t.minute, t.second, zoneId);
  }
  if (zoneId && zoneId !== "floating" && t.zone) return t.toUnixTime() * 1000; // defined only inside the file
  return zonedTimeToUtc(t.year, t.month, t.day, t.hour, t.minute, t.second, TIME_ZONE);
}

const dateKey = (y, m, d) => `${y}-${String(m).padStart(2, "0")}-${String(d).padStart(2, "0")}`;

function isFree(component) {
  const transp = component.getFirstPropertyValue("transp");
  return typeof transp === "string" && transp.toUpperCase() === "TRANSPARENT";
}

function isCancelled(component) {
  const status = component.getFirstPropertyValue("status");
  return typeof status === "string" && status.toUpperCase() === "CANCELLED";
}

/**
 * Reads busy times from an iCalendar feed.
 * Returns timed busy intervals (epoch ms) and whole busy days (YYYY-MM-DD, Eastern).
 */
export function readBusy(icsText, fromMs, toMs) {
  const calendar = new ICAL.Component(ICAL.parse(icsText));
  const vevents = calendar.getAllSubcomponents("vevent");

  // Google's public free/busy feed lists each occurrence of a repeating event on its own
  // (with RECURRENCE-ID and no series). Other feeds send a series (RRULE) plus changed
  // occurrences. Handle both: changed occurrences ride along with a repeating series,
  // and stand on their own otherwise.
  const isRepeating = (c) => c.hasProperty("rrule") || c.hasProperty("rdate");
  const seriesByUid = new Map();
  const exceptionsByUid = new Map();
  for (const ve of vevents) {
    const uid = ve.getFirstPropertyValue("uid");
    if (ve.hasProperty("recurrence-id")) {
      if (!exceptionsByUid.has(uid)) exceptionsByUid.set(uid, []);
      exceptionsByUid.get(uid).push(ve);
    } else if (isRepeating(ve) && !isCancelled(ve) && !isFree(ve)) {
      seriesByUid.set(uid, ve);
    }
  }

  const intervals = [];
  const busyDays = new Set();

  const add = (start, end) => {
    if (!start) return;
    if (start.isDate) {
      // All-day: block each calendar day from start up to (not including) end.
      const last = end && end.isDate ? end : null;
      const cursor = start.clone();
      let guard = 0;
      do {
        busyDays.add(dateKey(cursor.year, cursor.month, cursor.day));
        cursor.adjust(1, 0, 0, 0);
      } while (last && cursor.compare(last) < 0 && guard++ < 400);
      return;
    }
    const s = timeToMs(start);
    const e = end ? timeToMs(end) : s;
    if (e > fromMs && s < toMs && e > s) intervals.push([s, e]);
  };

  const fromTime = ICAL.Time.fromJSDate(new Date(fromMs - 2 * DAY), true);
  const toTime = ICAL.Time.fromJSDate(new Date(toMs + DAY), true);

  for (const ve of vevents) {
    const uid = ve.getFirstPropertyValue("uid");

    if (ve.hasProperty("recurrence-id")) {
      if (seriesByUid.has(uid)) continue; // expanded with its series below
      if (!isCancelled(ve) && !isFree(ve)) {
        const ev = new ICAL.Event(ve, { exceptions: [] });
        add(ev.startDate, ev.endDate);
      }
      continue;
    }
    if (isCancelled(ve) || isFree(ve)) continue;

    if (!isRepeating(ve)) {
      const ev = new ICAL.Event(ve, { exceptions: [] });
      add(ev.startDate, ev.endDate);
      continue;
    }

    const event = new ICAL.Event(ve, { exceptions: exceptionsByUid.get(uid) || [], strictExceptions: true });
    const it = event.iterator();
    let next;
    let guard = 0;
    while ((next = it.next()) && guard++ < 50_000) {
      if (next.compare(toTime) > 0) break;
      const details = event.getOccurrenceDetails(next);
      if (details.endDate && details.endDate.compare(fromTime) < 0) continue;
      const item = details.item && details.item.component ? details.item.component : ve;
      if (isCancelled(item) || isFree(item)) continue;
      add(details.startDate, details.endDate);
    }
  }

  intervals.sort((a, b) => a[0] - b[0]);
  const merged = [];
  for (const [s, e] of intervals) {
    const last = merged[merged.length - 1];
    if (last && s <= last[1]) last[1] = Math.max(last[1], e);
    else merged.push([s, e]);
  }
  return { busy: merged, busyDays };
}

const minutesOfDay = (ms) => {
  const p = zonedParts(ms);
  return p.h * 60 + p.mi;
};

/**
 * Open windows for each day, Eastern time, within 11 AM to 11 PM.
 * Each day: { date: "YYYY-MM-DD", status: "open" | "partial" | "booked", windows: [[startMin, endMin], ...] }
 * Minutes count from local midnight (660 = 11:00 AM).
 */
export function computeAvailability(icsText, nowMs = Date.now(), daysAhead = DAYS_AHEAD) {
  const today = zonedParts(nowMs);
  const firstDay = Date.UTC(today.y, today.m - 1, today.d);
  const toMs = nowMs + (daysAhead + 1) * DAY;
  const { busy, busyDays } = readBusy(icsText, nowMs - DAY, toMs);

  const days = [];
  let pointer = 0;
  for (let i = 0; i < daysAhead; i++) {
    const cal = new Date(firstDay + i * DAY);
    const y = cal.getUTCFullYear();
    const m = cal.getUTCMonth() + 1;
    const d = cal.getUTCDate();
    const key = dateKey(y, m, d);

    let windowStart = zonedTimeToUtc(y, m, d, Math.floor(DAY_START_MINUTES / 60), DAY_START_MINUTES % 60);
    const windowEnd = zonedTimeToUtc(y, m, d, Math.floor(DAY_END_MINUTES / 60), DAY_END_MINUTES % 60);
    const fullLength = windowEnd - windowStart;
    if (i === 0) windowStart = Math.max(windowStart, Math.ceil(nowMs / QUARTER_HOUR) * QUARTER_HOUR);

    const free = [];
    if (!busyDays.has(key) && windowStart < windowEnd) {
      while (pointer < busy.length && busy[pointer][1] <= windowStart) pointer++;
      let cursor = windowStart;
      for (let j = pointer; j < busy.length && busy[j][0] < windowEnd; j++) {
        const [bs, be] = busy[j];
        if (bs > cursor) free.push([cursor, Math.min(bs, windowEnd)]);
        cursor = Math.max(cursor, be);
        if (cursor >= windowEnd) break;
      }
      if (cursor < windowEnd) free.push([cursor, windowEnd]);
    }

    // Round to quarter hours (start up, end down) and keep only usable openings.
    const windows = [];
    for (const [s, e] of free) {
      const rs = Math.ceil(s / QUARTER_HOUR) * QUARTER_HOUR;
      const re = Math.floor(e / QUARTER_HOUR) * QUARTER_HOUR;
      if (re - rs >= MIN_WINDOW_MINUTES * MINUTE) windows.push([minutesOfDay(rs), minutesOfDay(re)]);
    }

    let status = "booked";
    if (windows.length === 1 && free.length === 1 && free[0][1] - free[0][0] === fullLength) status = "open";
    else if (windows.length) status = "partial";
    days.push(status === "open" ? { date: key, status } : { date: key, status, windows });
  }
  return days;
}
