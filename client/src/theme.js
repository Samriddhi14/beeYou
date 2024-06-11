// Define color tokens
export const colorTokens = {
  grey: {
      0: "#FFFFFF",
      10: "#F6F6F6",
      50: "#F0F0F0",
      100: "#E0E0E0",
      200: "#C2C2C2",
      300: "#A3A3A3",
      400: "#858585",
      500: "#666666",
      600: "#4D4D4D",
      700: "#333333",
      800: "#1A1A1A",
      900: "#0A0A0A",
      1000: "#000000",
  },
  primary: {
      50: "#E6FBFF",
      100: "#CCF7FE",
      200: "#99EEFD",
      300: "#66E6FC",
      400: "#33DDFB",
      500: "#00D5FA",
      600: "#00A0BC",
      700: "#006B7D",
      800: "#00353F",
      900: "#001519",
  },
};

// Merge additional color tokens with existing color tokens
export const mergedColorTokens = {
  ...colorTokens,
  purple: {
      50: "#F5E6FF",
      100: "#E0B3FF",
      200: "#C680FF",
      300: "#B04DFF",
      400: "#9A1AFF",
      500: "#8000FF",
      600: "#6600CC",
      700: "#4C0099",
      800: "#320066",
      900: "#190033",
  },
};

// Update themeSettings function
export const themeSettings = (mode) => {
  return {
      palette: {
          mode: mode,
          ...(mode === "dark"
              ? {
                    // palette values for dark mode
                    primary: {
                        dark: mergedColorTokens.primary[200],
                        main: mergedColorTokens.primary[500],
                        light: mergedColorTokens.primary[800],
                    },
                    neutral: {
                        dark: mergedColorTokens.grey[100],
                        main: mergedColorTokens.grey[200],
                        mediumMain: mergedColorTokens.grey[300],
                        medium: mergedColorTokens.grey[400],
                        light: mergedColorTokens.grey[700],
                    },
                    background: {
                        default: mergedColorTokens.grey[900],
                        alt: mergedColorTokens.grey[800],
                    },
                }
              : {
                    // palette values for light mode
                    primary: {
                        dark: mergedColorTokens.primary[700],
                        main: mergedColorTokens.primary[500],
                        light: mergedColorTokens.primary[50],
                    },
                    neutral: {
                        dark: mergedColorTokens.grey[700],
                        main: mergedColorTokens.grey[500],
                        mediumMain: mergedColorTokens.grey[400],
                        medium: mergedColorTokens.grey[300],
                        light: mergedColorTokens.grey[50],
                    },
                    background: {
                        default: mergedColorTokens.grey[10],
                        alt: mergedColorTokens.grey[0],
                    },
                }),
      },
      typography: {
          fontFamily: ["Rubik", "sans-serif"].join(","),
          fontSize: 12,
          h1: {
              fontFamily: ["Rubik", "sans-serif"].join(","),
              fontSize: 40,
          },
          h2: {
              fontFamily: ["Rubik", "sans-serif"].join(","),
              fontSize: 32,
          },
          h3: {
              fontFamily: ["Rubik", "sans-serif"].join(","),
              fontSize: 24,
          },
          h4: {
              fontFamily: ["Rubik", "sans-serif"].join(","),
              fontSize: 20,
          },
          h5: {
              fontFamily: ["Rubik", "sans-serif"].join(","),
              fontSize: 16,
          },
          h6: {
              fontFamily: ["Rubik", "sans-serif"].join(","),
              fontSize: 14,
          },
      },
  };
};
