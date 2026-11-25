// ============================================================
//  THIS IS THE ONLY FILE YOU EDIT. See EDIT-MY-CONTENT.md
// ============================================================

export const site = {
  name: "NMP",
  full: "No Music Production",
  founder: "Asif Khan",
  email: "collab.nmp@gmail.com", // <-- PUT YOUR EMAIL HERE
};

// Videos go in /public/videos/. Missing file = placeholder stays.
export const shortForm = [
  { title: "Podcast Reel", category: "Talking head / Short-form", tag: "The The Diary Of A CEO", duration: "0:30", src: "/videos/reel-1.mp4" },
  { title: "Minimal Edit", category: "Creative / Short-form", tag: "Independent sample", duration: "0:30", src: "/videos/reel-2.mp4" },
  { title: "Podcast Reel", category: "Talking head / Short-form", tag: "Sohail Zindani", duration: "0:30", src: "/videos/reel-3.mp4" },
];

// Paste the part after v= from your YouTube link. Leave "" to show the placeholder.
export const longForm = {
  youtubeId: "Go9pnFNtliU", // <-- PUT YOUR YOUTUBE VIDEO ID HERE
  tag: "Raj Shamani",
  title: "Podcast Introduction",
  category: "Long-form / Featured edit",
  description:
    "An independently edited podcast introduction focused on pacing, dialogue selection, animated typography, and visual storytelling.",
  responsibilities: ["Dialogue selection and pacing", "Animated typography", "Visual storytelling"],
  software: "DaVinci Resolve",
};

// Two videos in /public/videos/ — same edit, same length, same size.
// "before" = not colour graded, "after" = colour graded. Both play by themselves.
export const beforeAfter = {
  before: "/videos/before.mp4",
  after: "/videos/after.mp4",
  ratio: "16 / 9", // use "9 / 16" if your videos are vertical
  caption: "Colour grade",
  text: "Drag the handle to compare the original footage with the final grade.",
};

export const services = [
  { icon: "clapper", title: "Short-form editing", text: "Reels, YouTube Shorts, podcast clips and educational content." },
  { icon: "film", title: "Long-form editing", text: "YouTube videos, interviews, podcasts and documentary-style content." },
  { icon: "type", title: "Captions & visuals", text: "Readable subtitles, relevant visuals and purposeful pacing." },
  { icon: "sliders", title: "Colour & audio", text: "Basic colour correction, voice cleanup and balanced sound." },
];

export const process = [
  { title: "Discuss", text: "Understand the footage, references and requirements." },
  { title: "Edit", text: "Create a first version with care and intention." },
  { title: "Refine", text: "Apply revisions within the agreed scope." },
  { title: "Deliver", text: "Provide final files in the agreed format." },
];
