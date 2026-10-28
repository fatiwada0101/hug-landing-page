import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: { 18: "4.5rem" },
      colors: {
        primary: {
          DEFAULT: "var(--primary, #019934)",
          50: "#eafbf0",
          100: "#c7f6d6",
          200: "#94f0b0",
          300: "#55e383",
          400: "#24ce5d",
          500: "#019934",
          600: "#01822c",
          700: "#026624",
          800: "#055120",
          900: "#06431c",
          950: "#01250e",
        },
        secondary: {
          DEFAULT: "var(--secondary, #FF9A00)",
          50: "#fff9eb",
          100: "#feefc7",
          200: "#fedf8a",
          300: "#fec84b",
          400: "#ffa81a",
          500: "#FF9A00",
          600: "#e07d00",
          700: "#b55a02",
          800: "#924508",
          900: "#77390b",
        },
        brand: {
          green: "#019934",
          greenDark: "#026624",
          greenDeep: "#01250e",
          orange: "#FF9A00",
          orangeDark: "#e07d00",
          cream: "#FBF8F2",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Plus Jakarta Sans", "system-ui", "-apple-system", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
