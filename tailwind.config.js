module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class", // or 'media' or 'false'
  theme: {
    extend: {
      backgroundColor: {
        primary: "var(--color-bg-primary)",
        secondary: "var(--color-bg-secondary)",
        bgInput: "var(--color-bg-input)",
      },
      textColor: {
        primary: "var(--color-text-primary)",
      },
    },
  },
  plugins: [],
};
