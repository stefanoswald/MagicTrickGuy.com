export type Photo = {
  src: string;
  alt: string;
  /** CSS object-position used when the photo is cropped into a square tile */
  focus?: string;
};

export const photos = {
  galaStage: { src: "/images/corporate-gala-stage.webp", alt: "Stefan Oswald performing a levitation for a ballroom audience" },
  keynote: { src: "/images/keynote-headset.webp", alt: "Stefan Oswald on stage with a headset microphone" },
  corporateCloseUp: { src: "/images/corporate-close-up.webp", alt: "Stefan Oswald performing close-up magic with a guest at a corporate banquet" },
  outdoorLevitation: { src: "/images/outdoor-levitation.webp", alt: "Guests react as a table floats during Stefan Oswald's outdoor performance" },
  portrait: { src: "/images/portrait-rope.webp", alt: "Portrait of magician Stefan Oswald performing a rope routine", focus: "50% 30%" },
  closeUpCube: { src: "/images/close-up-cube.webp", alt: "Stefan Oswald holding a Rubik's Cube mid-trick", focus: "50% 35%" },
  stageLevitation: { src: "/images/stage-levitation.webp", alt: "Stefan Oswald levitating a table on a dark stage", focus: "50% 15%" },
  fox35Stage: { src: "/images/fox35-stage.webp", alt: "Stefan Oswald performing live on FOX 35 Orlando" },
  fox35Fire: { src: "/images/fox35-fire.webp", alt: "Stefan Oswald producing fire during a live FOX 35 Orlando interview" },
} satisfies Record<string, Photo>;

export const galleryPhotos: Photo[] = [
  photos.stageLevitation,
  photos.fox35Fire,
  photos.corporateCloseUp,
  photos.closeUpCube,
  photos.keynote,
  photos.outdoorLevitation,
  photos.portrait,
  photos.fox35Stage,
];
