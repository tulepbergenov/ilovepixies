import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./_src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // eslint-disable-next-line quotes
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: "2rem",
    },
  },
  plugins: [require("tailwindcss-text-rendering")],
};

export default config;
