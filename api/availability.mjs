// GET /api/availability
// Stefan's open dates for the website calendar, read from the public free/busy feed of his
// main Google Calendar. That feed only says "busy", so event names, places, and guests never
// reach this code. Visitors get open windows per day (Eastern, 11 AM to 11 PM), nothing else.
import {
  computeAvailability,
  DAY_END_MINUTES,
  DAY_START_MINUTES,
  MIN_WINDOW_MINUTES,
  TIME_ZONE,
} from "./_lib/availability-core.mjs";

const FEED_URL = "https://calendar.google.com/calendar/ical/stefanpauloswald%40gmail.com/public/basic.ics";

export default async function handler(req, res) {
  if (req.method !== "GET" && req.method !== "HEAD") {
    res.setHeader("Allow", "GET, HEAD");
    res.statusCode = 405;
    res.end();
    return;
  }

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 8000);
  try {
    const feed = await fetch(FEED_URL, { signal: controller.signal, headers: { accept: "text/calendar" } });
    if (!feed.ok) throw new Error(`calendar feed returned ${feed.status}`);
    const ics = await feed.text();
    if (!ics.includes("BEGIN:VCALENDAR")) throw new Error("calendar feed is not iCalendar");

    const body = JSON.stringify({
      timeZone: TIME_ZONE,
      dayStart: DAY_START_MINUTES,
      dayEnd: DAY_END_MINUTES,
      minWindow: MIN_WINDOW_MINUTES,
      updated: new Date().toISOString(),
      days: computeAvailability(ics),
    });
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    // Fresh within about five minutes of a calendar change; the CDN shares one copy between visitors.
    res.setHeader("Cache-Control", "public, max-age=60, s-maxage=300, stale-while-revalidate=3600");
    res.end(req.method === "HEAD" ? undefined : body);
  } catch (error) {
    console.error("availability:", error instanceof Error ? error.message : error);
    res.statusCode = 503;
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    res.setHeader("Cache-Control", "no-store");
    res.end(JSON.stringify({ error: "Availability is unavailable right now." }));
  } finally {
    clearTimeout(timer);
  }
}
