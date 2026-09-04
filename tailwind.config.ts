import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        deDark: {
          950: "#060a12",
          900: "#0b1120",
          850: "#0f172a",
          800: "#17223b",
          700: "#223154",
          600: "#334570",
        },
        deAccent: {
          cyan: "#06b6d4",
          sky: "#38bdf8",
          emerald: "#10b981",
          amber: "#f59e0b",
          orange: "#f97316",
          purple: "#a855f7",
        }
      },
      fontFamily: {
        mono: ["var(--font-geist-mono)", "Menlo", "Monaco", "Courier New", "monospace"],
        sans: ["var(--font-geist-sans)", "Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
