/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: { dark: "#202020", sDark: "#222e35", gPrimary: "#00a682" },
    },
  },
  plugins: [],
  darkMode: "class",
};
