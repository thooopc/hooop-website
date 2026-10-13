/** @type {import('tailwindcss').Config} */

// The brand's type, as tokens rather than as a PDF nobody reads.
//
// `theme.extend` was empty until Oct 2026, which meant font-sans, font-serif and
// font-mono fell through to Tailwind's defaults — system UI stacks. The site had
// no typeface of its own, and the deck (Poppins + Roboto Mono) and the poster
// system (Inter + Merriweather + Space Mono) had two more between them. These
// map the site onto the poster system's faces, so the social work and the site
// are the same brand.
//
// The system stacks stay as fallbacks: the page must stay readable for the
// moment before the webfont lands, and if Google Fonts is blocked or slow it
// degrades to where the site already was rather than to Times.
const SANS_FALLBACK = [
  "ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "Roboto",
  "Helvetica Neue", "Arial", "sans-serif",
];

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Body and headings. Variable 300-900, so font-black still gets a real
        // 900 cut rather than a synthesised one.
        sans: ["Inter", ...SANS_FALLBACK],
        // The editorial voice. Currently used once, decoratively; the token
        // exists so that stops being the only option.
        serif: ["Merriweather", "ui-serif", "Georgia", "Cambria", "serif"],
        // Eyebrows and labels — uppercase and letter-spaced, as on the posters.
        mono: ["Space Mono", "ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
    },
  },
  plugins: [],
}
