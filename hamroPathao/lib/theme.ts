export const colors = {
  // Primary - Blue brand colors
  primary: "#0066CC",
  primaryLight: "#E6F0FF",
  primaryDark: "#004A99",

  // Secondary - Green action colors
  secondary: "#22C55E",
  secondaryLight: "#F0FDF4",
  secondaryDark: "#16A34A",

  // Neutral colors
  white: "#FFFFFF",
  black: "#000000",
  background: "#F8F9FA",
  surface: "#FFFFFF",
  surfaceVariant: "#F3F4F6",

  // Text colors
  text: "#1F2937",
  textSecondary: "#6B7280",
  textTertiary: "#9CA3AF",

  // Status colors
  error: "#EF4444",
  errorLight: "#FEE2E2",
  warning: "#F59E0B",
  warningLight: "#FEF3C7",
  success: "#22C55E",
  successLight: "#F0FDF4",

  // Borders and dividers
  border: "#E5E7EB",
  borderLight: "#F3F4F6",

  // Shadows (used in elevation)
  shadowLight: "rgba(0, 0, 0, 0.08)",
  shadowMedium: "rgba(0, 0, 0, 0.12)",
  shadowDark: "rgba(0, 0, 0, 0.16)",
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 24,
  xxxl: 32,
};

export const typography = {
  h1: { fontSize: 32, fontWeight: "700", lineHeight: 40 },
  h2: { fontSize: 28, fontWeight: "700", lineHeight: 36 },
  h3: { fontSize: 24, fontWeight: "700", lineHeight: 32 },
  h4: { fontSize: 20, fontWeight: "700", lineHeight: 28 },
  h5: { fontSize: 18, fontWeight: "600", lineHeight: 24 },
  h6: { fontSize: 16, fontWeight: "600", lineHeight: 20 },

  // Body text
  bodyLarge: { fontSize: 16, fontWeight: "400", lineHeight: 24 },
  bodyMedium: { fontSize: 14, fontWeight: "400", lineHeight: 20 },
  bodySmall: { fontSize: 12, fontWeight: "400", lineHeight: 16 },

  // Button text
  buttonLarge: { fontSize: 18, fontWeight: "600", lineHeight: 24 },
  buttonMedium: { fontSize: 16, fontWeight: "600", lineHeight: 20 },

  // Caption
  caption: { fontSize: 12, fontWeight: "500", lineHeight: 16 },
  label: { fontSize: 13, fontWeight: "600", lineHeight: 18 },
};

export const borderRadius = {
  sm: 6,
  md: 8,
  lg: 12,
  xl: 16,
  xxl: 24,
  full: 999,
};

export const elevation = {
  none: {},
  sm: {
    shadowColor: colors.shadowLight,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 2,
  },
  md: {
    shadowColor: colors.shadowMedium,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 4,
  },
  lg: {
    shadowColor: colors.shadowDark,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 6,
  },
};

export const theme = {
  colors,
  spacing,
  typography,
  borderRadius,
  elevation,
};

export type Theme = typeof theme;
