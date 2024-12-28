import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        backgroundMain: "var(--background-main)",
        backgroundKeypad: "var(--background-keypad)",
        backgroundScreen: "var(--background-screen)",

        keyBackground: "var(--key-background)",
        keyShadow: "var(--key-shadow)",

        keyBackgroundSpecial: "var(--key-background-special)",
        keyShadowSpecial: "var(--key-shadow-special)",

        keyBackgroundToggle: "var(--key-background-toggle)",
        keyShadowToggle: "var(--key-shadow-toggle)",

        textTitle: "var(--text-title)",
        textKey: "var(--text-key)",
        textKeySpecial: "var(--text-key-special)",
        textKeyEqual: "var(--text-key-equal)",
      },
    },
  },
  plugins: [],
} satisfies Config;
