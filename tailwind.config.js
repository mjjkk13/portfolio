import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        portfolio: {
          "primary":          "#7c3aed",
          "primary-content":  "#ffffff",
          "secondary":        "#ec4899",
          "secondary-content":"#ffffff",
          "accent":           "#34d399",
          "accent-content":   "#0f172a",
          "neutral":          "#1e293b",
          "neutral-content":  "#cbd5e1",
          "base-100":         "#0f172a",
          "base-200":         "#1e293b",
          "base-300":         "#334155",
          "base-content":     "#e2e8f0",
          "info":             "#38bdf8",
          "success":          "#34d399",
          "warning":          "#fbbf24",
          "error":            "#f87171",
        },
      },
    ],
    darkTheme: "portfolio",
  },
};
