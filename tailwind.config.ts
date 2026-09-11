import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#12141A",       // primary background — charcoal, not pure black
        panel: "#1A1D25",     // card / panel surface
        line: "#2A2E38",      // hairline borders
        paper: "#EDEEE9",     // primary text
        mute: "#A6ABB8",      // secondary text — lightened for readability
        signal: "#3FCF7F",    // accent — muted terminal green
        amber: "#E8A951",     // secondary accent, used very sparingly
      },
      fontFamily: {
        mono: ["'JetBrains Mono'", "ui-monospace", "SFMono-Regular", "monospace"],
        sans: ["'Inter'", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      maxWidth: {
        prose: "68ch",
      },
      keyframes: {
        twinkle: {
          "0%, 100%": { opacity: "0.15" },
          "50%": { opacity: "0.9" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.6", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.25)" },
        },
        particleFloat: {
          "0%": { transform: "translateY(0) scale(1)", opacity: "0" },
          "12%": { opacity: "0.8" },
          "88%": { opacity: "0.8" },
          "100%": { transform: "translateY(-90px) scale(0.6)", opacity: "0" },
        },
        ambientMove: {
          "0%, 100%": { transform: "translate(-50%, -50%) scale(1)", opacity: "0.55" },
          "50%": { transform: "translate(-46%, -55%) scale(1.2)", opacity: "0.9" },
        },
        iconPulse: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.35)" },
        },
        iconSpin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        popIn: {
          "0%": { opacity: "0", transform: "scale(0.85) translateY(4px)" },
          "100%": { opacity: "1", transform: "scale(1) translateY(0)" },
        },
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 18px -6px rgba(63,207,127,0.35)" },
          "50%": { boxShadow: "0 0 32px -4px rgba(63,207,127,0.65)" },
        },
      },
      animation: {
        twinkle: "twinkle 4s ease-in-out infinite",
        "fade-up": "fadeUp 0.6s ease-out both",
        float: "float 5s ease-in-out infinite",
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
        "particle-float": "particleFloat 9s ease-in-out infinite",
        "ambient-move": "ambientMove 8s ease-in-out infinite",
        "icon-pulse": "iconPulse 0.9s ease-in-out infinite",
        "icon-spin": "iconSpin 1.1s linear infinite",
        "pop-in": "popIn 0.25s cubic-bezier(0.34,1.56,0.64,1) both",
        "glow-pulse": "glowPulse 1.8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
