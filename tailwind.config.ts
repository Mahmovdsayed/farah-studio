import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        spotlight: "spotlight 2s ease .75s 1 forwards",
      },
      keyframes: {
        spotlight: {
          "0%": {
            opacity: "0",
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: "1",
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
      },
      fontFamily: {
        sharpSansBold: "var(--font-sharp-sans-bold)",
        sharpSansBoldItalic: "var(--font-sharp-sans-bold-italic)",
       
        sharpSansItalic: "var(--font-sharp-sans-italic)",
        sharpSansLight: "var(--font-sharp-sans-light)",
        sharpSansLightItalic: "var(--font-sharp-sans-light-italic)",
        sharpSansMedium: "var(--font-sharp-sans-medium)",
        sharpSansMediumItalic: "var(--font-sharp-sans-medium-italic)",
        sharpSansSemiBold: "var(--font-sharp-sans-semi-bold)",
        sharpSansSemiBoldItalic: "var(--font-sharp-sans-semi-bold-italic)",
        sharpSansThin: "var(--font-sharp-sans-thin)",
        sharpSansThinItalic: "var(--font-sharp-sans-thin-italic)",
        Roustel: "var( --font-RoustelRegular)",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
} satisfies Config;
