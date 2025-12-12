import type { Config } from 'tailwindcss';

const config: Config = {
    content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
    presets: [require("nativewind/preset")],
    theme: {
        extend: {
            colors: {
                primary: "#2563EB",
                primaryLight: "#EFF6FF",
                textMain: "#000000",
                textSecondary: "#6B7280",
                textSubtle: "#9CA3AF",
                border: "#E5E5EA",
                muted: "#F2F2F7",
                danger: "#FF3B30",
                dangerBg: "#FFE5E5",
                inputBg: "#F9F9F9",
            },
            fontFamily: {
                sans: ['CircularStd-Book', 'system-ui', 'sans-serif'],
                medium: ['CircularStd-Medium', 'system-ui', 'sans-serif'],
                bold: ['CircularStd-Bold', 'system-ui', 'sans-serif'],
            },
            boxShadow: {
                sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
                card: '0 2px 8px 0 rgba(0, 0, 0, 0.04)',
            }
        },
    },
    plugins: [],
};

module.exports = config;
