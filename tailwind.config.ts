import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'instrument-serif': ['var(--font-instrument-serif-regular)', 'serif'],
        'instrument-serif-italic': ['var(--font-instrument-serif-italic)', 'serif'],
        'space-grotesk-light': ['var(--font-space-grotesk-light)', 'sans-serif'],
        'space-grotesk-regular': ['var(--font-space-grotesk-regular)', 'sans-serif'],
        'space-grotesk-medium': ['var(--font-space-grotesk-medium)', 'sans-serif'],
        'space-grotesk-semibold': ['var(--font-space-grotesk-semibold)', 'sans-serif'],
        'space-grotesk-bold': ['var(--font-space-grotesk-bold)', 'sans-serif'],
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
