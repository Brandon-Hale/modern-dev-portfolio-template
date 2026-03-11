/**
 * Theme Configuration
 *
 * Controls the visual feel of the portfolio. Change these values
 * to customize colors, fonts, and the dot-grid background.
 */

const theme = {
  /** Primary accent color used for buttons, active states, and highlights */
  accentColor: '#0D1B4B',

  /** Background color for the entire site */
  backgroundColor: '#F8F7F4',

  /** Heading text color */
  headingColor: '#0D0D0D',

  /** Body text color */
  bodyColor: '#4A4A4A',

  /** Card background color */
  cardBackground: '#FFFFFF',

  /** Card border color */
  cardBorder: 'rgba(0,0,0,0.07)',

  /** Dot grid settings */
  dotGrid: {
    /** Spacing between dots in pixels */
    spacing: 28,
    /** Opacity of the primary dots (0 to 1) */
    opacity: 0.12,
    /** Size of each dot in pixels */
    size: 1.2,
  },

  /** Mouse spotlight settings */
  spotlight: {
    /** Radius of the cursor spotlight in pixels */
    radius: 300,
    /** Opacity of the spotlight effect */
    opacity: 0.04,
  },

  /** Font families — loaded from Google Fonts in index.html */
  fonts: {
    /** Display headings (h1, h2) */
    display: "'Instrument Serif', serif",
    /** Body text */
    body: "'Figtree', sans-serif",
    /** Tags, labels, and monospaced elements */
    mono: "'DM Mono', monospace",
  },
}

export default theme
