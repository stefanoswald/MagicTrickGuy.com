export type Photo = {
  src: string;
  alt: string;
  /** CSS object-position used when the photo is cropped */
  focus?: string;
};

/**
 * Photos. The "room" shots (guests reacting, booths filling up, crowds cheering) come from
 * Stefan's Oct 2026 shot board, pulled from his own event footage. Promo-shoot frames
 * (lounge set) must not be captioned as a client's event.
 */
export const photos = {
  // Older stage and portrait shots
  galaStage: { src: "/images/corporate-gala-stage.webp", alt: "Stefan Oswald performing a levitation for a ballroom audience" },
  keynote: { src: "/images/keynote-headset.webp", alt: "Stefan Oswald on stage with a headset microphone" },
  corporateCloseUp: { src: "/images/corporate-close-up.webp", alt: "Stefan Oswald performing close-up magic with a guest at a corporate banquet" },
  outdoorLevitation: { src: "/images/outdoor-levitation.webp", alt: "Guests react as a table floats during Stefan Oswald's outdoor performance" },
  portraitRope: { src: "/images/portrait-rope.webp", alt: "Portrait of magician Stefan Oswald performing a rope routine", focus: "50% 30%" },
  closeUpCube: { src: "/images/close-up-cube.webp", alt: "Stefan Oswald holding a Rubik's Cube mid-trick", focus: "50% 35%" },
  stageLevitation: { src: "/images/stage-levitation.webp", alt: "Stefan Oswald levitating a table on a dark stage", focus: "50% 15%" },
  fox35Stage: { src: "/images/fox35-stage.webp", alt: "Stefan Oswald performing live on FOX 35 Orlando" },
  fox35Fire: { src: "/images/fox35-fire.webp", alt: "Stefan Oswald producing fire during a live FOX 35 Orlando interview" },

  // Shot board (4:5 unless noted)
  guestsLaughingTogether: { src: "/images/corporate-guests-laughing-together.webp", alt: "Two guests laughing together at a corporate party in a jet hangar" },
  groupReacting: { src: "/images/team-event-group-reacting.webp", alt: "A team of event staff laughing and reacting together during a magic moment" },
  boothCrowd: { src: "/images/trade-show-booth-crowd-pga-show.webp", alt: "Attendees gathering at a trade show booth at the PGA Show in Orlando during Stefan Oswald's magic" },
  emceeOnStage: { src: "/images/emcee-on-stage-live-audience.webp", alt: "Emcee Stefan Oswald hosting on stage with a microphone in front of a live audience", focus: "30% 50%" },
  sharedMoment: { src: "/images/corporate-party-shared-moment.webp", alt: "Guests at a company party reacting together to a magic moment" },
  listening: { src: "/images/stefan-oswald-listening.webp", alt: "Stefan Oswald listening to a guest before a performance" },
  cube: { src: "/images/close-up-magic-rubiks-cube.webp", alt: "Magician Stefan Oswald holding a Rubik's Cube during close-up magic" },
  demoDayAmazed: { src: "/images/demo-day-guest-amazed.webp", alt: "A guest laughing in disbelief at PGA Show Demo Day while a camera crew films" },
  partyGuestSmiling: { src: "/images/corporate-party-guest-smiling.webp", alt: "A smiling guest at a lively corporate party in a jet hangar" },
  agtStage: { src: "/images/americas-got-talent-stage.webp", alt: "Stefan Oswald on the America's Got Talent stage" }, // 16:9
  holidayStage: { src: "/images/holiday-stage-show.webp", alt: "Stefan Oswald performing on a holiday event stage at a JW Marriott" }, // 16:9
  portrait: { src: "/images/stefan-oswald-portrait.webp", alt: "Stefan Oswald, Orlando magician and emcee", focus: "50% 35%" },
  hangarGuestAmazed: { src: "/images/corporate-guest-amazed-jet-hangar.webp", alt: "A guest with her hand on her heart, amazed, at a corporate party in a jet hangar" },
  hangarGuestSmiling: { src: "/images/corporate-guest-smiling-jet-hangar.webp", alt: "A guest smiling during walkaround magic at a corporate party in a jet hangar" },
  roomLaughing: { src: "/images/group-show-guests-laughing.webp", alt: "Guests laughing in the front row during Stefan Oswald's show" }, // 16:9
  boothLaughing: { src: "/images/trade-show-visitors-laughing.webp", alt: "Trade show visitors laughing at a booth at the PGA Show in Orlando" },
  cardRevealCrowd: { src: "/images/trade-show-card-reveal-crowd.webp", alt: "A card reveal drawing a crowd at a trade show booth" },
  demoDayReaction: { src: "/images/trade-show-guest-reaction.webp", alt: "A trade show guest reacting to magic while a camera crew films at PGA Show Demo Day" },
  emceeWide: { src: "/images/emcee-host-stage-wide.webp", alt: "Emcee Stefan Oswald hosting a live show on stage at The Magic Studio" }, // 16:9
  emceeWalkOn: { src: "/images/emcee-walking-on-stage.webp", alt: "Emcee Stefan Oswald walking on stage with a microphone" }, // 16:9
  crowdCheering: { src: "/images/emcee-crowd-cheering.webp", alt: "Audience cheering while emcee Stefan Oswald hosts a show" }, // 16:9
  privateClapping: { src: "/images/private-party-guests-clapping.webp", alt: "Guests clapping as magician Stefan Oswald performs at a private party" }, // 16:9
  privateCloseUp: { src: "/images/private-party-close-up-magic.webp", alt: "Stefan Oswald laughing with guests during close-up magic" }, // 16:9
  portraitCards: { src: "/images/stefan-oswald-portrait-cards.webp", alt: "Magician Stefan Oswald smiling with a fan of playing cards", focus: "50% 30%" },
  cupsAndBalls: { src: "/images/stefan-oswald-cups-and-balls.webp", alt: "Magician Stefan Oswald smiling at a guest during a cups and balls routine" }, // 16:9
  magicMansion: { src: "/videos/stefan-oswald-promo-poster.jpg", alt: "Stefan Oswald at The Magic Mansion in Orlando" }, // 16:9
} satisfies Record<string, Photo>;

export const galleryPhotos: Photo[] = [
  { ...photos.agtStage, focus: "50% 70%" },
  photos.hangarGuestAmazed,
  { ...photos.emceeWide, focus: "25% 50%" },
  photos.boothCrowd,
  { ...photos.holidayStage, focus: "75% 50%" },
  photos.fox35Fire,
  { ...photos.privateCloseUp, focus: "40% 50%" },
  photos.stageLevitation,
];
