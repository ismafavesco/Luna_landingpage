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
        // Fraunces: títulos, logotipo y momentos especiales
        sketch: ["Fraunces", ...defaultTheme.fontFamily.serif],
        // Inter: cuerpo de texto, interfaz y datos
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
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
          "primary": "#6E86B8",            // Azul astral
          "primary-content": "#0A0F1C",    // Noche sobre azul astral
          "secondary": "#4A5C86",          // Lapislázuli
          "secondary-content": "#FAEFEE",  // Hueso
          "accent": "#FAEFEE",             // Hueso
          "accent-content": "#0A0F1C",
          "neutral": "#253559",            // Medianoche
          "neutral-content": "#FAEFEE",
          "base-100": "#0A0F1C",           // Noche — fondo principal
          "base-200": "#141F38",           // Índigo
          "base-300": "#253559",           // Medianoche
          "base-content": "#FAEFEE",       // Hueso — texto
          "info": "#6E86B8",
          "success": "#7FA88C",
          "warning": "#D9B382",
          "error": "#C97B7B",
          "--rounded-box": "1rem",
          "--rounded-btn": "0.5rem",
        },
      },
    ],
  },
};
