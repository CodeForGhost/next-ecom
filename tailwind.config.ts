import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#b6eaef",
          secondary: "#25ce49",
          accent: "#b323d3",
          neutral: "#221b22",
          "base-100": "#30373b",
          info: "#48a1e5",
          success: "#5eedd5",
          warning: "#f68e0e",
          error: "#f8445c",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
export default config;
