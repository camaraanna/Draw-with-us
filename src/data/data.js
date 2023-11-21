import React from "react";
import drawing from "../assets/img/Drawing.png";
import painting from "../assets/img/Painting.png";
import info from "../assets/img/Infos.png";

export const data = [
  {
    id: 1,
    type: "drawing",
    title: "DRAWING",
    img: drawing,
    date: "June 20th - 2023",
    description: `Calling all young artists! Join us for a fun-filled day of learning how to draw. Dive into a world of colors, imagination, and laughter at our "Art Fiesta". Unleash your creativity, make new friends, and create masterpieces that will make your heart sing!`,
    location: " 123 Artistic Avenue, Cityville, USA 12345",
  },

  {
    id: 2,
    type: "painting",
    title: "PAINTING",
    img: painting,
    date: "July 12th - 2023",
    description: `  Embark on a colorful journey at our "Painting Paradise" event. Discover the magic of brush and canvas as you unleash your inner artist. Join us for a day of laughter, inspiration, and painting fun!`,
    location: " 123 Artistic Avenue, Cityville, USA 12345",
  },

  {
    id: 3,
    type: "info",
    title: "INFORMATION",
    img: info,
    description: `
      Welcome to "Draw With Us," the art association where imagination knows no bounds. Join our creative community of young artists as we explore the wonders of drawing together. Discover new techniques, express yourself, and let your artistic talents shine. Unleash your inner Picasso and become part of the vibrant world of "Draw With Us"!`,
    location: " 123 Artistic Avenue, Cityville, USA 12345",
  },
];

export default data;
