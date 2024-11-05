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
                secondary: "rgba(255,111,0,1)",
                primary: "rgba(0,59,54,1)",
                darkText: "#012622",
                lightText: "#ece5f0",
                bgLight: "#ece5f0",
                bgHover: "rgba(0,102,94,1)",
            },
            backgroundImage: {
                gradientSecondary:
                    "linear-gradient(0deg, rgba(255,199,125,1) 0%, rgba(255,111,0,1) 100%);",
                gradientPrimary:
                    " linear-gradient(0deg, rgba(0,102,110,1) 0%, rgba(0,59,54,1) 100%);",
                bgLightGradient:
                    "linear-gradient(30deg, rgba(255,255,255,1) 0%, rgba(225,255,255,1) 25%, rgba(200,255,255,1) 50%, rgba(175,255,255,1) 75%, rgba(150,255,255,1) 100%);",
            },
        },
    },
    plugins: [],
};
