import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    screens: {
      "3xs": "350px",
      "2xs": "400px",
      xs: "475px",
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        sketch: ["Cinzel", ...defaultTheme.fontFamily.serif],
        sans: ["Jost", ...defaultTheme.fontFamily.sans],
      },
      animation: {
        "meteor-effect": "meteor 5s linear infinite",
      },
      keyframes: {
        meteor: {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
          "70%": { opacity: "1" },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: "0",
          },
        },
      },
    },
  },
  plugins: [require("daisyui"), require("@tailwindcss/typography")],
  daisyui: {
    themes: [
      {
        luna: {
          ...require("daisyui/src/theming/themes")["[data-theme=dark]"],
          "primary": "#8B5CF6",            // Mystic Violet
          "primary-content": "#F5F5FF",    // Star White on violet
          "secondary": "#A0D9F7",          // Sky Blue
          "secondary-content": "#0C0C20",  // Cosmic Navy on sky blue
          "accent": "#A78BFA",             // Soft Violet
          "accent-content": "#0C0C20",
          "neutral": "#1B1B3A",            // deep indigo surface
          "neutral-content": "#D7D9F0",
          "base-100": "#0C0C20",           // Cosmic Navy background
          "base-200": "#14142E",
          "base-300": "#1F1B45",
          "base-content": "#EDEEFA",       // light text
          "info": "#A0D9F7",
          "success": "#7DD3A8",
          "warning": "#F5C542",
          "error": "#F87189",
          "--rounded-box": "1rem",
          "--rounded-btn": "0.75rem",
        },
      },
    ],
  },
};
