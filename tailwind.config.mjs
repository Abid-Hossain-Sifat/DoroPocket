/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: "class", // <-- এই লাইনটি অবশ্যই যোগ করবেন
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
export default config;