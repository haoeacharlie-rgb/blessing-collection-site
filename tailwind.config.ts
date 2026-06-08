import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "rgb(var(--color-background) / <alpha-value>)",
        foreground: "rgb(var(--color-foreground) / <alpha-value>)",
        primary: "rgb(var(--color-primary) / <alpha-value>)",
        accent: "rgb(var(--color-accent) / <alpha-value>)",
        paper: "rgb(var(--color-paper) / <alpha-value>)",
        mist: "rgb(var(--color-mist) / <alpha-value>)",
      },
      fontFamily: {
        body: ["var(--font-body)", "serif"],
        handwriting: ["var(--font-handwriting)", "cursive"],
      },
      boxShadow: {
        card: "0 18px 60px rgba(124, 185, 232, 0.18)",
        soft: "0 10px 30px rgba(58, 58, 58, 0.08)",
      },
      backgroundImage: {
        "storybook-glow":
          "radial-gradient(circle at top, rgba(124, 185, 232, 0.28), transparent 34%), radial-gradient(circle at bottom right, rgba(247, 215, 148, 0.36), transparent 30%)",
      },
      animation: {
        drift: "drift 6s ease-in-out infinite",
      },
      keyframes: {
        drift: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
