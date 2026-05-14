import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./app/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
        "./lib/**/*.{ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                card: {
                    DEFAULT: "var(--card)",
                    foreground: "var(--card-foreground)",
                },
                popover: {
                    DEFAULT: "var(--popover)",
                    foreground: "var(--popover-foreground)",
                },
                primary: {
                    DEFAULT: "var(--primary)",
                    foreground: "var(--primary-foreground)",
                },
                secondary: {
                    DEFAULT: "var(--secondary)",
                    foreground: "var(--secondary-foreground)",
                },
                muted: {
                    DEFAULT: "var(--muted)",
                    foreground: "var(--muted-foreground)",
                },
                accent: {
                    DEFAULT: "var(--accent)",
                    foreground: "var(--accent-foreground)",
                },
                destructive: {
                    DEFAULT: "var(--destructive)",
                    foreground: "var(--destructive-foreground)",
                },
                border: "var(--border)",
                input: "var(--input)",
                ring: "var(--ring)",
                chart: {
                    "1": "var(--chart-1)",
                    "2": "var(--chart-2)",
                    "3": "var(--chart-3)",
                    "4": "var(--chart-4)",
                    "5": "var(--chart-5)",
                },
                // Keep the old colors as fallbacks/legacy during refactor
                parchment: {
                    DEFAULT: "#F4E6C8",
                    dark: "#E9D8B4",
                    light: "#FAF3E6",
                },
                saffron: {
                    DEFAULT: "#D97706",
                    light: "#F59E0B",
                    dark: "#B45309",
                },
                "temple-brown": {
                    DEFAULT: "#5C3A21",
                    light: "#6B4A2D",
                    dark: "#3B2A1A",
                },
                "antique-gold": {
                    DEFAULT: "#C8A14A",
                    light: "#D4B86A",
                    dark: "#A88A3A",
                },
            },
            fontFamily: {
                sans: ["var(--font-sans)", "system-ui", "sans-serif"],
                heading: ["var(--font-sans)", "system-ui", "sans-serif"],
                body: ["var(--font-serif)", "Georgia", "serif"],
                serif: ["var(--font-serif)", "Georgia", "serif"],
                mono: ["var(--font-mono)", "monospace"],
            },
            maxWidth: {
                site: "1200px",
            },
            spacing: {
                section: "100px",
            },
            boxShadow: {
                soft: "var(--shadow-offset-x) var(--shadow-offset-y) var(--shadow-blur) var(--shadow-spread) var(--shadow-color)",
                card: "0 4px 20px rgba(74, 63, 53, 0.12)",
            },
            borderColor: {
                gold: "#C8A14A",
            },
        },
    },
    plugins: [],
};

export default config;
