/** @type {import('tailwindcss').Config} */
export const content = [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
];
export const theme = {
    extend: {
        colors: {
            kairosDark: "#0B0F19",
            kairosRed: "#E11D2E",
            kairosGray: "#1F2937",
            kairosLight: "#F9FAFB",
        },
        boxShadow: {
        kairos: "0 4px 20px rgba(0,0,0,0.08)",
        },
        borderRadius: {
            xl: "12px",
        },
    },
};
export const plugins = [];