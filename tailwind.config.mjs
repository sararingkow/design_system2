/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],

  /* Vil du overskrive eller extende tailwinds indstillinger?  */

  theme: {
    /* Tilføj din egen farvepalette nedenfor */
    colors: {
      red: {
        50: "#FBEAEA",
        100: "#F6D5D5",
        200: "#EDABAB",
        300: "#E48181",
        400: "#DB5757",
        500: "#D3302F",
        600: "#A82424",
        700: "#7E1B1B",
        800: "#541212",
        900: "#2A0909",
        950: "#150404",
      },
      blue: {
        50: "#f9fafb",
        100: "#f3f4f6",
        200: "#e5e7eb",
        300: "#d1d5db",
        400: "#9ca3af",
        500: "#6b7280",
        600: "#4b5563",
        700: "#374151",
        800: "#1f2937",
        900: "#111827",
        950: "#030712",
      },
      grey: {
        50: "#FFFFFF",
        100: "#FFFFFF",
        200: "#FCFCFC",
        300: "#FCFCFC",
        400: "#FAFAFA",
        500: "#F9F9F9",
        600: "#C7C7C7",
        700: "#969696",
        800: "#636363",
        900: "#333333",
        950: "#1A1A1A",
      },
      black: "#000000",
      white: "#FFFFFF",
    },
    /* Tilføj din egen spacing nedenfor */
    spacing: {
      xs: "0px",
      sm: "12px",
      md: "32px",
      lg: "40px",
      xl: "52px",
      "2xl": "64px",
      "3xl": "80px",
      "4xl": "96px",
      "5xl": "118px",
      "6xl": "128px",
      "7xl": "240px",
      "8xl": "360px",
      "9xl": "450px",
    },

    /* Tilføj fonte herunder - husk også at tilføje webfonte i head-sektionen i MainLayout  */
    fontFamily: {
      almarai: ["Almarai", "sans-serif"],
      exo: ["Exo", "sans-serif"],
    },

    /* Tilføj dit typografiske hierarki herunder */
    fontSize: {
      base: ["1rem", { lineHeight: "1.5rem" }],
      small: ["0.875rem", { lineHeight: "1.25rem" }],
      medium: ["1.125rem", { lineHeight: "1.75rem" }],
      large: ["1.5rem", { lineHeight: "2rem" }],
      xlarge: ["2.5rem", { lineHeight: "3.75rem" }],
    },

    /* Tilføj dit fontvægt-hierarki nedenfor */
    fontWeight: {
      light: "300",
      regular: "400",
      bold: "700",
      extrabold: "900",
    },

    /* Borders - borderstørrelser herunder */
    borderWidth: {
      DEFAULT: "1px",
      0: "0px",
    },

    /* Border radius størrelser herunder */
    borderRadius: {
      DEFAULT: "8px",
      none: "0px",
    },

    /* Box shadows herunder */
    boxShadow: {
      sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
      md: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
      lg: "0 4px 6px -4px rgb(0 0 0 / 0.1)",
      xl: "0 8px 10px -6px rgb(0 0 0 / 0.1)",
    },

    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/container-queries"),
  ],
};
