import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        first: "#800000",
        second: "#982B1C",
        third: "#DAD4B5",
        fourth: "#F2E8C6",
        semiBlack: "#212227"
      },
    },
  },
  plugins: [],
};
export default config;
