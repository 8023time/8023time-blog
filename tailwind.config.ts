/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './index.html',
    './src/App.tsx',
    './src/components/**/*.{js,jsx,ts,tsx}',
    './src/generated/**/*.{js,jsx,ts,tsx}',
    './src/layout/**/*.{js,jsx,ts,tsx}',
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/common/**/*.{js,jsx,ts,tsx}',
  ],
};

export default config;
