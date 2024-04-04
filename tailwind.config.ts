import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "6200EA": "#6200EA"
      },
      maxWidth: {
        "800-px": "800px",
        "700-px": "700px",
        "490-px": "490px",
        "440-px": "440px",
        "400-px": "400px",
        "350-px": "350px",
        "348-px": "348px",
        "200-px": "220px",
        "50-px": "50px",
      },
      maxHeight: {
        "440-px": "440px",
        "400-px": "400px",
        "160-px": "180px",
        "50-px": "50px",
      },
      spacing: {
        "175": "175px",
      }
      
    },
  },
  plugins: [],
};
export default config;
