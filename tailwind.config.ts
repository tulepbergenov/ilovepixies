import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./src/**/*.{js,ts,jsx,tsx,mdx}"],
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
