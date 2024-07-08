/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-white": "#FFFFFF",
        "primary-black": "#343a40",
        "primary-teal": "#1dbbc3",
        "secondary-teal": "#17ddd6",
        "tertiary-teal": "#0c8599",
        "primary-cyan": "#e3fafc",
        "primary-green": "#20c997",
        "primary-red": "#d9480f",
        "primary-gray": "#868e96",
        "primary-pink": "#d6336c",
        "primary-grape": "#be4bdb",
        "primary-violate": "#7048e8",
        "primary-orange": "#f76707",
      },
    },
  },
  plugins: [],
};
