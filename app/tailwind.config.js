/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        black: "#2F4858",
        navy: "#3F4061",
        red: "#C36883",
        yellow: "#F58A76",
        shadow: "#BABECC",
        whiteGray: "#EBECF0",
      },
      fonts: {},
    },
  },
  plugins: [],
};
