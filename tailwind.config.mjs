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
    },

    /* Tilføj fonte herunder - husk også at tilføje webfonte i head-sektionen i MainLayout  */
    fontFamily: {
      almarai: ["Almarai", "sans-serif"],
      exo: ["Exo", "sans-serif"],
    },

    /* Tilføj dit typografiske hierarki herunder */
    fontSize: {
      base: ["1rem", { lineHeight: "1.5rem" }],
      large: ["2.5rem", { lineHeight: "3.75rem" }],
    },

    /* Tilføj dit fontvægt-hierarki nedenfor */
    fontWeight: {
      regular: "400",
      medium: "500",
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
    // boxShadow: {
    //     drop25: '4px 4px 4px 0 rgb(0 0 0 / 0.25)', /* x y blur spread farve / opacity */
    // },

    extend: {
      /* Tilføj din egen farvepalette nedenfor */
      // colors: {
      //     transparent: 'transparent',
      //     current: 'currentColor',
      //     'farvenavn': {
      //         50: '#hexkode',
      //         100: '#hexkode',
      //         200: '#hexkode',
      //         300: '#hexkode',
      //         400: '#hexkode',
      //         500: '#hexkode',
      //         600: '#hexkode',
      //         700: '#hexkode',
      //         800: '#hexkode',
      //         900: '#hexkode',
      //     },
      //     'white': '#fff',
      //     'black': '#000',
      // },
      /* Tilføj din egen spacing nedenfor */
      // spacing: {
      //     'm': '40px',
      // },
      /* Tilføj fonte herunder - husk også at tilføje webfonte i head-sektionen i MainLayout  */
      // fontFamily: {
      //     sans: ['Prompt', 'sans-serif'],
      //     'display': ['Courier', 'monospace'], /* eksempel på ekstra font */
      // },
      /* Tilføj dit typografiske hierarki herunder */
      // fontSize: {
      //     base: ['1rem', { lineHeight: '1.5rem' }],
      //     large: ['2.5rem', { lineHeight: '3.75rem' }],
      //   },
      /* Tilføj dit fontvægt-hierarki nedenfor */
      //   fontWeight: {
      //     regular: '400',
      //   },
      /* Borders - borderstørrelser herunder */
      // borderWidth: {
      //     DEFAULT: '1px',
      //     0: '0px',
      //     2: '2px',
      // },
      /* Border radius størrelser herunder */
      // borderRadius: {
      //     DEFAULT: '1.25rem',
      //     none: '0px',
      // },
      /* Box shadows herunder */
      // boxShadow: {
      //     drop25: '4px 4px 4px 0 rgb(0 0 0 / 0.25)', /* x y blur spread farve / opacity */
      // },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/container-queries"),
  ],
};
