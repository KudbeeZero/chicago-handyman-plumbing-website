/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Brand colors
        "brand-navy": {
          DEFAULT: "#0F1F3D",
          50: "#E8EDF5",
          100: "#C5D0E6",
          200: "#9AAFD4",
          300: "#6F8EC2",
          400: "#4D74B3",
          500: "#2B5AA4",
          600: "#1E4A8C",
          700: "#163A72",
          800: "#0F2A58",
          900: "#0A1E3F",
          950: "#060F20",
        },
        "brand-orange": {
          DEFAULT: "#E8521A",
          50: "#FEF0EA",
          100: "#FDD8C8",
          200: "#FBBFA3",
          300: "#F9A07A",
          400: "#F47D4A",
          500: "#E8521A",
          600: "#C94415",
          700: "#A83610",
          800: "#87290C",
          900: "#661E08",
          950: "#3D1104",
        },
        "brand-gold": {
          DEFAULT: "#F5A623",
          50: "#FEF7E8",
          100: "#FDECC5",
          200: "#FBE09F",
          300: "#F9D378",
          400: "#F7C44E",
          500: "#F5A623",
          600: "#D4891A",
          700: "#B06D12",
          800: "#8C530B",
          900: "#683C06",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        heading: ["Montserrat", "Inter", "system-ui", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        "brand-sm": "0 2px 8px rgba(232, 82, 26, 0.15)",
        "brand-md": "0 4px 16px rgba(232, 82, 26, 0.25)",
        "brand-lg": "0 8px 32px rgba(232, 82, 26, 0.35)",
        "navy-sm": "0 2px 8px rgba(15, 31, 61, 0.15)",
        "navy-md": "0 4px 16px rgba(15, 31, 61, 0.25)",
        "navy-lg": "0 8px 32px rgba(15, 31, 61, 0.35)",
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "bounce-slow": "bounce 2s infinite",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};
