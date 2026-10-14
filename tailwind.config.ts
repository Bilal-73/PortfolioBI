import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
        display: ['"Bricolage Grotesque Variable"', '"DM Sans"', 'sans-serif'],
        hand: ['Caveat', 'cursive'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        "pop-sm": "3px 3px 0 hsl(var(--foreground))",
        pop: "4px 4px 0 hsl(var(--foreground))",
        "pop-lg": "7px 7px 0 hsl(var(--foreground))",
      },
      colors: {
        pop: {
          orange: "hsl(var(--pop-orange))",
          blue: "hsl(var(--pop-blue))",
          lime: "hsl(var(--pop-lime))",
          pink: "hsl(var(--pop-pink))",
          yellow: "hsl(var(--pop-yellow))",
          sky: "hsl(var(--pop-sky))",
        },
        onpop: "hsl(var(--on-pop))",
        paper: "hsl(var(--paper))",
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
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
        marquee: {
          to: { transform: "translateX(-50%)" },
        },
        blink: {
          "50%": { opacity: "0" },
        },
        wiggle: {
          "25%": { transform: "rotate(-8deg) scale(1.1)" },
          "75%": { transform: "rotate(6deg) scale(1.1)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        marquee: "marquee 28s linear infinite",
        blink: "blink 1s steps(1) infinite",
        wiggle: "wiggle 0.4s ease-in-out",
        "spin-slow": "spin 14s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
