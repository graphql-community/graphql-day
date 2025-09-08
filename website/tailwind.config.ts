import containerQueries from "@tailwindcss/container-queries";
import typography from "@tailwindcss/typography";
import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      fontFamily: {
        sans: [
          `var(--font-sans, ${fontFamily.sans.slice(0, 3).join(", ")})`,
          ...fontFamily.sans,
        ],
        mono: [
          `var(--font-mono, ${fontFamily.mono.slice(0, 3).join(", ")})`,
          ...fontFamily.mono,
        ],
      },
      screens: {
        xs: "394px",
        "3xl": "1920px",
      },
      colors: {
        black: "#000",

        // #region new design system colors
        "pri-lighter": "hsl(var(--color-pri-lighter) / <alpha-value>)",
        "pri-light": "hsl(var(--color-pri-light) / <alpha-value>)",
        "pri-base": "hsl(var(--color-pri-base) / <alpha-value>)",
        "pri-dark": "hsl(var(--color-pri-dark) / <alpha-value>)",
        "pri-darker": "hsl(var(--color-pri-darker) / <alpha-value>)",

        "sec-lighter": "hsl(var(--color-sec-lighter) / <alpha-value>)",
        "sec-light": "hsl(var(--color-sec-light) / <alpha-value>)",
        "sec-base": "hsl(var(--color-sec-base) / <alpha-value>)",
        "sec-dark": "hsl(var(--color-sec-dark) / <alpha-value>)",
        "sec-darker": "hsl(var(--color-sec-darker) / <alpha-value>)",

        // We're using 3-letter color names to avoid conflicting
        // with the old `neutral` color.
        "neu-0": "hsl(var(--color-neu-0) / <alpha-value>)",
        "neu-50": "hsl(var(--color-neu-50) / <alpha-value>)",
        "neu-100": "hsl(var(--color-neu-100) / <alpha-value>)",
        "neu-200": "hsl(var(--color-neu-200) / <alpha-value>)",
        "neu-300": "hsl(var(--color-neu-300) / <alpha-value>)",
        "neu-400": "hsl(var(--color-neu-400) / <alpha-value>)",
        "neu-500": "hsl(var(--color-neu-500) / <alpha-value>)",
        "neu-600": "hsl(var(--color-neu-600) / <alpha-value>)",
        "neu-700": "hsl(var(--color-neu-700) / <alpha-value>)",
        "neu-800": "hsl(var(--color-neu-800) / <alpha-value>)",
        "neu-900": "hsl(var(--color-neu-900) / <alpha-value>)",

        blk: "#000",

        /**
         * GraphQL Rhodamine as per the trademark guidelines
         * https://www.graphql.org/brand/
         */
        rhodamine: "#e10098",
        // #endregion new design system colors
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
        "arrow-left":
          "arrow-left var(--animation-duration, .75s) var(--animation-direction, forwards) ease infinite",
        "show-overflow":
          "show-overflow var(--animation-duration, 12s) var(--animation-delay, 1s) var(--animation-direction, forwards) ease infinite",
      },
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - .25rem))",
          },
        },
        "arrow-left": {
          "0%, 100%": {
            transform: "translateX(0)",
          },
          "50%": {
            transform: "translateX(var(--arrow-left-x,-1.5px))",
          },
        },
        "show-overflow": {
          "0%, 100%": {
            transform: "translateX(0)",
          },
          "25%, 75%": {
            transform: "translateX(var(--delta-x))",
          },
        },
      },
    },
  },
  plugins: [
    typography,
    containerQueries,
    plugin(({ addBase }) => {
      // heading styles
      addBase({
        ".typography-d1, .typography-h1, .typography-h2, .typography-h3": {
          lineHeight: "1.2",
        },
        ".typography-d1": {
          fontSize: "48px",
          "@screen lg": {
            fontSize: "96px",
          },
        },
        ".typography-h1": {
          fontSize: "40px",
          "@screen lg": {
            fontSize: "72px",
          },
        },
        ".typography-h2": {
          fontSize: "32px",
          "@screen md": {
            fontSize: "48px",
          },
        },
        ".typography-h3": {
          fontSize: "24px",
          "@screen md": {
            fontSize: "32px",
          },
        },
      });

      // paragraph styles
      addBase({
        ".typography-body-lg, .typography-body-md, .typography-body-sm, .typography-body-xs":
          {
            lineHeight: "1.5",
          },
        ".typography-body-lg": {
          fontSize: "16px",
          "@screen md": {
            fontSize: "20px",
          },
        },
        ".typography-body-md": {
          fontSize: "14px",
          "@screen md": {
            fontSize: "16px",
          },
        },
        ".typography-body-sm": {
          fontSize: "12px",
          "@screen md": {
            fontSize: "14px",
          },
        },
        ".typography-body-xs": {
          fontSize: "10px",
          "@screen md": {
            fontSize: "12px",
          },
        },
      });

      // other text styles
      addBase({
        ".typography-button, .typography-tagline": {
          fontSize: "16px",
          lineHeight: "1",
        },
        ".typography-tagline": {
          textTransform: "uppercase",
        },
        ".typography-menu": {
          fontFamily: "var(--font-mono)",
          fontSize: "14px",
          lineHeight: "1",
          textTransform: "uppercase",
        },
      });

      addBase({
        ".typography-link": {
          color: "hsl(var(--color-neu-900) / var(--tw-text-opacity, 1))",
          textDecoration: "underline",
          "&:hover": {
            textDecoration: "none",
          },
        },
      });
    }),
    tailwindMediaHover(),
  ],
  darkMode: ["class", 'html[class~="dark"]'],
};

export default config;

function tailwindMediaHover() {
  return plugin(({ addVariant }) => {
    addVariant("hover-hover", "@media (hover: hover)");
    addVariant("hover-none", "@media (hover: none)");
  });
}
