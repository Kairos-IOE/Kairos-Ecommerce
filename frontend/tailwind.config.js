/** @type {import('tailwindcss').Config} */
export const content = [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
];
export default {
  theme: {
    extend: {
      colors: {
        kairosRed: "#E53935",
        kairosDark: "#0B0F1A",
        kairosLight: "#F5F6F8",
        kairosBorder: "#E5E7EB"
      },
      boxShadow: {
        kairos: "0 2px 8px rgba(0,0,0,0.04)",
        kairosHover: "0 4px 16px rgba(0,0,0,0.08)"
      }
    }
  }
};
export const plugins = [];