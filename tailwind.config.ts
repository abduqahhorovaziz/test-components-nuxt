import type { Config } from "tailwindcss";

export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./composables/**/*.{js,ts}",
    "./assets/**/*.css",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: "#201B17",
          100: "#0F0D0B",
          200: "#111111",
          300: "#171F18",
          400: "#030303",
        },
        gray: {
          800: "#E8E8E8",
          700: "#FCFBF3",
          600: "#DCDCDC",
          500: "#C9C9C9",
          400: "#999999",
          300: "#696969",
          200: "#E7E7E7",
          100: "#F7F7F7",
        },
        orange: {
          DEFAULT: "#FF9345",
          100: "#F07318",
        },
        blue: {
          DEFAULT: "#4580EB",
          100: "#326EDB",
        },
        crimson: "#A51C30",
      },

      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
