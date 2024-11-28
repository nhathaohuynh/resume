import type { Config } from "tailwindcss"
import svgToDataUri from "mini-svg-data-uri"
import { PluginAPI } from "tailwindcss/types/config"
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primarycolor: "#0ea5e9",
        secondarycolor: "#121214",
        bgcolor: "#0D0D0F"
      }
    }
  },
  plugins: [
    function ({ matchUtilities, theme }: PluginAPI) {
      matchUtilities(
        {
          "bg-grid": (color: string) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${color}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`
          })
        },
        {
          values: theme("colors"),
          type: ["color", "any"]
        }
      )
    }
  ]
} satisfies Config
