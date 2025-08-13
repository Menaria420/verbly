module.exports = {
  content: [
    "./src/app/**/*.{ts,tsx,js,jsx}",
    "./src/components/**/*.{ts,tsx,js,jsx}",
    "./src/pages/**/*.{ts,tsx,js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0f172a",
        accent: "#7c3aed"
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
