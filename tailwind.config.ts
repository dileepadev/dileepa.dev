import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: "class",
  theme: {
    screens: {
      xs: '320px',
      sm: '576px',
      md: "960px",
    },
    extend: {
      fontFamily: {
        title: "var(--font-poppins)",
      },
    },
  },
  plugins: [],
}
export default config
