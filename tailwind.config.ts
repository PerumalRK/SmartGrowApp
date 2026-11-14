import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: { DEFAULT: "#101B3F", 800: "#16244f", 900: "#0b1230" },
        royal: { DEFAULT: "#2563EB", 600: "#1d4ed8" },
        cyan: { DEFAULT: "#06B6D4" },
        mist: "#F5F7FB",
        slate: { ink: "#1E293B" },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-manrope)", "var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(16,27,63,.04), 0 8px 24px -8px rgba(16,27,63,.10)",
        lift: "0 2px 4px rgba(16,27,63,.05), 0 20px 40px -12px rgba(37,99,235,.25)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        "fade-up": "fade-up .7s ease-out both",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
