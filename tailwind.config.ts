import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        charcoal: "#2c2c2c",
        charcoalDark: "#1d1d1d",
        ash: "#3a3a3a",
        sand: "#c8b8a0",
        accent: "#d31f2a",
      },
      fontFamily: {
        heading: ["Inter", "sans-serif"],
        body: ["Merriweather", "serif"],
      },
      backgroundImage: {
        "dot-grid": "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.08) 1px, transparent 0)",
      },
      boxShadow: {
        soft: "0 20px 60px rgba(0,0,0,0.35)",
      },
    },
  },
  plugins: [],
} satisfies Config;
