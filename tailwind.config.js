/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      gridTemplateColumns: {
        fluid: "repeat(auto-fill, minmax(25%, 1fr))",
      },
      colors: {
        "primary-color": "#E2E2DE",
        "secondary-color": "#DC2626",
        "selected-text-color": "#393632",
        "unselected-text-color": "#6A635B",
        "accent-color-3": "#272727",
      },
    },
  },
  plugins: [],
};
