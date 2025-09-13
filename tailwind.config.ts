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
      colors: {
        /* Core Colors */
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        surface: "hsl(var(--surface))",
        "surface-variant": "hsl(var(--surface-variant))",
        "on-surface": "hsl(var(--on-surface))",
        "on-surface-variant": "hsl(var(--on-surface-variant))",
        
        /* Brand Colors */
        primary: {
          DEFAULT: "hsl(var(--primary))",
          hover: "hsl(var(--primary-hover))",
          active: "hsl(var(--primary-active))",
          foreground: "hsl(var(--on-primary))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          hover: "hsl(var(--secondary-hover))",
          active: "hsl(var(--secondary-active))",
          foreground: "hsl(var(--on-secondary))",
        },
        
        /* State Colors */
        success: {
          DEFAULT: "hsl(var(--success))",
          light: "hsl(var(--success-light))",
        },
        warning: {
          DEFAULT: "hsl(var(--warning))",
          light: "hsl(var(--warning-light))",
        },
        error: {
          DEFAULT: "hsl(var(--error))",
          light: "hsl(var(--error-light))",
        },
        info: {
          DEFAULT: "hsl(var(--info))",
          light: "hsl(var(--info-light))",
        },
        
        /* Border & Input */
        border: {
          DEFAULT: "hsl(var(--border))",
          hover: "hsl(var(--border-hover))",
          focus: "hsl(var(--border-focus))",
        },
        "input-bg": "hsl(var(--input-bg))",
        "input-disabled": "hsl(var(--input-disabled))",
        
        /* Focus Ring */
        ring: "hsl(var(--ring))",
        "ring-offset": "hsl(var(--ring-offset))",
        
        /* Table Colors */
        "table-header": "hsl(var(--table-header))",
        "table-row-hover": "hsl(var(--table-row-hover))",
        "table-border": "hsl(var(--table-border))",
        
        /* Legacy shadcn compatibility */
        input: "hsl(var(--border))",
        muted: {
          DEFAULT: "hsl(var(--surface-variant))",
          foreground: "hsl(var(--on-surface-variant))",
        },
        accent: {
          DEFAULT: "hsl(var(--surface-variant))",
          foreground: "hsl(var(--on-surface))",
        },
        destructive: {
          DEFAULT: "hsl(var(--error))",
          foreground: "hsl(var(--on-primary))",
        },
        popover: {
          DEFAULT: "hsl(var(--background))",
          foreground: "hsl(var(--foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--surface))",
          foreground: "hsl(var(--on-surface))",
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
      spacing: {
        "spacing-xs": "var(--spacing-xs)",
        "spacing-sm": "var(--spacing-sm)",
        "spacing-md": "var(--spacing-md)",
        "spacing-lg": "var(--spacing-lg)",
        "spacing-xl": "var(--spacing-xl)",
      },
      fontSize: {
        "size-xs": "var(--font-size-xs)",
        "size-sm": "var(--font-size-sm)",
        "size-base": "var(--font-size-base)",
        "size-lg": "var(--font-size-lg)",
        "size-xl": "var(--font-size-xl)",
      },
      borderRadius: {
        "radius-sm": "var(--radius-sm)",
        lg: "var(--radius)",
        md: "var(--radius-md)",
        sm: "var(--radius-sm)",
        "radius-lg": "var(--radius-lg)",
      },
      boxShadow: {
        "shadow-sm": "var(--shadow-sm)",
        "shadow": "var(--shadow)",
        "shadow-md": "var(--shadow-md)",
        "shadow-lg": "var(--shadow-lg)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
