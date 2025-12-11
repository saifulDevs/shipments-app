/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
    presets: [require("nativewind/preset")],
    theme: {
        extend: {
            colors: {
                primary: "#0055FF",
                textMain: "#000000",
                textSecondary: "#8E8E93",
                border: "#E5E5EA",
                muted: "#F2F2F7",
                danger: "#FF3B30",
                dangerBg: "#FFE5E5",
                inputBg: "#F9F9F9",
            },
            boxShadow: {
                sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
                card: '0 2px 8px 0 rgba(0, 0, 0, 0.04)',
            }
        },
    },
    plugins: [],
}
