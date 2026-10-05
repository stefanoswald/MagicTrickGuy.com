/**
 * What a planner wants to happen at their event, and where Stefan explains how he gets them there.
 * The homepage leads with these instead of a list of services: outcomes first, magic second.
 */
export const outcomes = [
  {
    id: "connection",
    title: "Your people actually connect",
    description: "Close-up magic gives coworkers a reason to gather, laugh, and call each other over. Departments mix. The new hire ends up talking to the VP.",
    href: "/corporate-magic",
    linkLabel: "Corporate events",
    icon: "Users",
  },
  {
    id: "energy",
    title: "More energy in the room",
    description: "People drop their guard, laugh, and start talking. I read the room and keep the energy up, from cocktail hour to the last toast.",
    href: "/corporate-magic",
    linkLabel: "Stage shows & strolling magic",
    icon: "Zap",
  },
  {
    id: "booth",
    title: "A booth people can't walk past",
    description: "Magic stops traffic, draws a crowd, and hands your sales team warm conversations instead of polite nods.",
    href: "/trade-show-magic",
    linkLabel: "Trade show entertainment",
    icon: "Presentation",
  },
  {
    id: "smooth",
    title: "A program that runs smoothly",
    description: "An emcee who keeps things moving, fills the awkward gaps, and handles the unexpected, so you can stop watching the clock.",
    href: "/emcee-host",
    linkLabel: "Emcee & host",
    icon: "Megaphone",
  },
  {
    id: "message",
    title: "A message that sticks",
    description: "A keynote where the magic makes your theme something people see with their own eyes, so they still remember it on Monday.",
    href: "/keynote-magic",
    linkLabel: "Keynotes",
    icon: "Mic",
  },
  {
    id: "story",
    title: "Guests who leave with a story",
    description: "Birthdays, anniversaries, VIP dinners: the moment everyone is still talking about the next morning.",
    href: "/private-events",
    linkLabel: "Private events",
    icon: "GlassWater",
  },
];

/**
 * Credentials, used as reassurance ("can I trust him with my event?") rather than as the headline.
 * Source: Stefan's one sheet and his own notes (Oct 2026). Keep these in sync with the promo video's cards.
 */
export const proof = {
  asSeenOn: ["America's Got Talent", "FOX", "NBC", "ABC"],
  shows: "3,000+",
  countries: "43",
  reviews: "1,000+",
  clients: ["Dell", "IBM", "HP"],
};

export const contact = {
  email: "StefanPaulOswald@gmail.com",
  instagram: "https://www.instagram.com/magictrickguy/",
  facebook: "https://www.facebook.com/MagicTrickGuy/",
  youtube: "https://www.youtube.com/@magictrickguy",
  magicMansionUrl: "https://the-magic-mansion.com",
};

/**
 * Public review listings for The Great Magic Hall (Old Town Kissimmee), where Stefan was a resident magician.
 * Ratings and counts as shown on each site; "namedStefan" = reviews that mention Stefan by name
 * (collected Sept 2026, see the reviews spreadsheet in the project). Leave namedStefan undefined if not counted.
 */
export type ReviewPlatform = {
  name: string;
  rating: number;
  reviews: number;
  namedStefan?: number;
  url: string;
};

export const reviewPlatforms: ReviewPlatform[] = [
  {
    name: "Tripadvisor",
    rating: 4.9,
    reviews: 480,
    namedStefan: 99,
    url: "https://www.tripadvisor.com/Attraction_Review-g34352-d8353009-Reviews-The_Great_Magic_Hall-Kissimmee_Florida.html",
  },
  {
    name: "Google",
    rating: 4.8,
    reviews: 1181,
    namedStefan: 103,
    url: "https://www.google.com/maps/place/Theatre+Magic+%2F+The+Great+Magic+Hall/@28.3290463,-81.5159586,17z/data=!4m8!3m7!1s0x88dd7f5874f56f85:0xf7450219e9ced561!8m2!3d28.3290463!4d-81.5159586!9m1!1b1",
  },
];

export type Testimonial = {
  id: number;
  quote: string;
  name: string;
  title?: string;
  company?: string;
  eventType: "Corporate" | "Media" | "Live Show";
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "We had Stefan perform his magic at a corporate event where our customers not only found his illusions fascinating and mind-boggling, but they also found his demeanor to be quite charming and his delivery and dialog to be humorous and witty. We would definitely invite him back to delight our customers at more events.",
    name: "Elizabeth Huber",
    company: "Huber & Associates",
    eventType: "Corporate",
    rating: 5
  },
  {
    id: 2,
    quote: "His mind reading and magic blew my mind!",
    name: "Pooja Lodhia",
    company: "FOX 4 Fort Myers",
    eventType: "Media",
    rating: 5
  },
  {
    id: 3,
    quote: "Tremendous.",
    name: "David Martin",
    company: "FOX 35 Orlando",
    eventType: "Media",
    rating: 5
  },
  {
    id: 4,
    quote: "Melt your brain fantastic. Mentally engaging. Better than a thrill ride. Stefan was outstanding. Our first Magic show. 5 year anniversary.",
    name: "Jason Ryan",
    eventType: "Live Show",
    rating: 5
  },
  {
    id: 5,
    quote: "Stefan was an amazing performer. He kept us on the edge of our seats all the time. Very amazing performance! Would recommend this show to everyone! I grew up with a grandfather who was a professional magician and Stefan kept my husband and I amazed! Awesome performance! Thanks Stefan! Will definitely be back again!",
    name: "Guy Schnaars",
    eventType: "Live Show",
    rating: 5
  },
  {
    id: 6,
    quote: "It blew my mind!! It reminded me how much I love Magic!! Plus the Magician, Stefan, that performed the show I watched... he was really awesome! He kept a big ol' smile on my face!",
    name: "Chazz Jackson",
    eventType: "Live Show",
    rating: 5
  },
  {
    id: 7,
    quote: "Stefan was great. His magic was amazing and fun for the whole family. The children were very involved and even the most serious people can feel like a child again with the wonders he showed. I definitely would recommend this show and would come again.",
    name: "Isaac Retamar",
    eventType: "Live Show",
    rating: 5
  },
  {
    id: 8,
    quote: "The great and amazing Stefan is one of the best local magicians in Florida. I believe he can be the next David Copperfield.",
    name: "AC Yang",
    eventType: "Live Show",
    rating: 5
  },
  {
    id: 9,
    quote: "Stefan was fantastic! This is the coolest magic show I've seen, I was super amused and amazed the entire time! My nephews loved it, such a fantastic time! I would definitely do it again!",
    name: "Lori Lauridsen",
    eventType: "Live Show",
    rating: 5
  },
  {
    id: 10,
    quote: "Stefan was amazing!! The show is well worth the tickets. The audience is very involved, and the show is up close and personal making the magic very real!! We thoroughly enjoyed it!",
    name: "RW",
    eventType: "Live Show",
    rating: 5
  },
  {
    id: 11,
    quote: "Stefan was worth the watch. The jokes with the combination of tricks made for a fun time. Very social and worth seeing again.",
    name: "Jude Zamor",
    eventType: "Live Show",
    rating: 5
  },
  {
    id: 12,
    quote: "I absolutely LOVED this place! Stefan was amazing and very friendly and all of the magic will leave you speechless. I will definitely be back again to see another show",
    name: "Khadijah Daniels",
    eventType: "Live Show",
    rating: 5
  },
  {
    id: 13,
    quote: "Stefan was an unbelievable amazing magician. He had my whole family amazed. Thoroughly entertaining and would absolutely recommend you going to see his show.",
    name: "Anna Lynn",
    eventType: "Live Show",
    rating: 5
  }
];

export type Faq = {
  id: string;
  question: string;
  answer: string;
};

export const faqs: Faq[] = [
  {
    id: "booking",
    question: "How far in advance should we book?",
    answer: "For prime dates (especially November and December holidays and spring conference season), 3 to 6 months ahead is best. Last-minute dates do open up, so it's always worth asking."
  },
  {
    id: "babysit",
    question: "How much will we have to manage you?",
    answer: "Very little. I arrive early, coordinate with your AV team and venue, and take care of my own details. My goal is to be one less thing on your list, not one more."
  },
  {
    id: "clean",
    question: "Is the show clean?",
    answer: "Always. Everything I do is clean and classy. The humor is sharp without off-color jokes, and nobody gets embarrassed, including the boss."
  },
  {
    id: "changes",
    question: "What if the schedule changes or something goes wrong?",
    answer: "That's live events. A speaker runs late, dinner runs long, a mic dies. After thousands of shows, very little rattles me. I adjust in the moment and keep the room with me while things get sorted."
  },
  {
    id: "message",
    question: "Can you incorporate our company's message or product?",
    answer: "Yes. For trade shows and keynotes especially, I can work your messaging, branding, or product features right into the performance, so the magic points people back to you."
  },
  {
    id: "emcee",
    question: "Can you also emcee our event?",
    answer: "Yes. I can host your program in addition to performing, keeping introductions, awards, and transitions on track. Hosting can be added to any booking."
  },
  {
    id: "travel",
    question: "Do you travel for events?",
    answer: "Yes. I'm based in Orlando, Florida, I've performed in 43 countries, and I travel nationwide and internationally for corporate events, trade shows, and speaking engagements."
  },
  {
    id: "tech",
    question: "What are your technical requirements?",
    answer: "It depends on the format. Strolling close-up magic needs very little. For stage shows: a reliable PA system, a wireless headset or lavalier mic, and good lighting. I'll send a simple tech rider once we book."
  }
];

/** Pick FAQs by id, in the order given. */
export function pickFaqs(ids: string[]): Faq[] {
  return ids
    .map((id) => faqs.find((f) => f.id === id))
    .filter((f): f is Faq => Boolean(f));
}
