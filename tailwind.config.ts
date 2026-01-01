import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "neon-blue": "#3DE8FF",
        "neon-orange": "#FF8A3D",
        "glass": "rgba(10, 16, 30, 0.65)",
        "glass-border": "rgba(61, 232, 255, 0.18)"
      },
      boxShadow: {
        glow: "0 0 30px rgba(61, 232, 255, 0.35)",
        "glow-orange": "0 0 28px rgba(255, 138, 61, 0.35)"
      },
      backdropBlur: {
        xl: "20px"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" }
        },
        scan: {
          "0%": { backgroundPosition: "0 0, 0 0, 0 0" },
          "100%": { backgroundPosition: "0 400px, 200px 0, 0 0" }
        },
        glowPulse: {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" }
        },
        blink: {
          "0%, 92%, 100%": { transform: "scaleY(0.1)", opacity: "0" },
          "94%, 96%": { transform: "scaleY(1)", opacity: "0.9" }
        }
      },
      animation: {
        float: "float 5s ease-in-out infinite",
        scan: "scan 18s linear infinite",
        glow: "glowPulse 4s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;
