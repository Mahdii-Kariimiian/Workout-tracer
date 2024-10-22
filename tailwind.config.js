/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                josefin: ["'Josefin Sans'", "sans-serif"],
                agdasima: ["'Agdasima'", "sans-serif"],
            },
            colors: {
                secondary: "#d37c12",
                primary: "#003b36",
                darkText: "#012622",
                lightText: "#ece5f0",
                bgLight: "#ece5f0",
                bgHover: "rgba(0,102,94,1)"
            },
            backgroundImage: {
                gradientSecondary:
                    "linear-gradient(59deg, rgba(255,141,0,1) 0%, rgba(211,124,18,1) 100%)",
                gradientPrimary:
                    " linear-gradient(59deg, rgba(0,102,94,1) 0%, rgba(0,59,54,1) 100%);",
            },
        },
    },
    plugins: [],
};
