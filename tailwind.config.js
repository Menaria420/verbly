module.exports = {
  content: [
    "./src/app/**/*.{ts,tsx,js,jsx}",
    "./src/components/**/*.{ts,tsx,js,jsx}",
    "./src/pages/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        theme: {
          extend: {
            colors: {
              primary: "var(--color-primary)",
              "primary-foreground": "var(--color-primary-foreground)",
              surface: "var(--color-surface)",
              foreground: "var(--color-foreground)",
              muted: "var(--color-muted)",
              border: "var(--color-border)",
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
