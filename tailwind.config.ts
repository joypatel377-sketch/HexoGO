import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        neon: {
          500: "#39ff14", // A vibrant neon green for own hexes
        },
        rival: {
          500: "#ff073a", // Neon red/pink for rival hexes
        }
      },
    },
  },
  plugins: [],
};
export default config;
