export const services = [
  {
    id: "corporate-events",
    title: "Corporate Events",
    description: "High-impact entertainment for galas, holiday parties, and corporate retreats.",
    href: "/corporate-magic",
    icon: "Building"
  },
  {
    id: "trade-shows",
    title: "Trade Shows",
    description: "Stop traffic, generate leads, and make your booth the talk of the show floor.",
    href: "/trade-show-magic",
    icon: "Presentation"
  },
  {
    id: "keynote-magic",
    title: "Keynote Magic",
    description: "A customized presentation blending world-class magic with your company's core message.",
    href: "/keynote-magic",
    icon: "Mic"
  },
  {
    id: "masterminds",
    title: "Masterminds",
    description: "The Magic Mansion: immersive multi-day intensives in Orlando where performers train with world-class mentors.",
    href: "/masterminds",
    icon: "Lightbulb"
  },
  {
    id: "private-events",
    title: "Private Events",
    description: "Exclusive close-up and parlor magic for VIP gatherings and luxury private parties.",
    href: "/contact",
    icon: "GlassWater"
  },
  {
    id: "emcee-host",
    title: "Emcee / Host",
    description: "Keep your event flowing smoothly with a charismatic host who knows how to hold a room. Available as an add-on to any booking.",
    href: "/contact",
    icon: "Megaphone"
  }
];

export const contact = {
  email: "StefanPaulOswald@gmail.com",
  instagram: "https://www.instagram.com/magictrickguy/",
  facebook: "https://www.facebook.com/MagicTrickGuy/",
  youtube: "https://www.youtube.com/@magictrickguy",
  showreelYouTubeId: "dUVRMhvR3As",
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

export const faqs = [
  {
    question: "How far in advance should we book?",
    answer: "For prime dates (especially November/December holidays and spring conference season), it is recommended to book 3-6 months in advance. However, always reach out as last-minute dates occasionally open up."
  },
  {
    question: "Do you travel for events?",
    answer: "Yes. Stefan is based in Orlando, Florida, and travels nationwide and internationally for corporate events, trade shows, and speaking engagements."
  },
  {
    question: "Is the show 'clean'?",
    answer: "Absolutely. Stefan's performances are 100% corporate-clean. The humor is sharp and sophisticated without ever relying on off-color jokes or embarrassing audience members."
  },
  {
    question: "What are your technical requirements?",
    answer: "Technical requirements vary depending on the format. For stage shows, a reliable PA system, a wireless headset/lavalier microphone, and good lighting are required. A detailed technical rider will be provided upon booking."
  },
  {
    question: "Can you incorporate our company's message or product?",
    answer: "Yes! For trade shows and keynote presentations, Stefan specializes in weaving your specific messaging, branding, or product features seamlessly into the performance."
  },
  {
    question: "Can Stefan also emcee our event?",
    answer: "Yes. Stefan can host your program as emcee in addition to performing, keeping introductions, awards, and transitions running smoothly. Emcee services can be added to any booking."
  }
];
