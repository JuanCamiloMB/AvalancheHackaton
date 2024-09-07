/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        "general-sans": ["GeneralSans", "sans-serif"],
        "geist-mono": ["GeistMonoVF", "sans-serif"],
        "redhat-display": ["RedHatDisplay", "sans-serif"],
      },
    },
  },
  plugins: [],
};
