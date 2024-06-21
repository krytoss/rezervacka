import type { Config } from "tailwindcss";
import icons from "rocketicons/tailwind";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
	icons
  ],
  darkMode: ['selector', '[data-theme="dark"]'],
  daisyui: {
	themes: false
  }
};
export default config;
