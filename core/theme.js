import { common } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

const colors = {
  purple: "#a881fc",
  lightPurple: '#7A6DAA',
  blue: "#1fc7d4",
  green: "#31d0aa",
  white: "#FFFFFF",
  pink: "#ed4b9e",
  lightGrayBg: "#F7F8FC",
  textGray: "#748390",
  textLightGray: "#7A6DAA",
  textLight: '#f4eeff',
  textDark: "#181F25",
  text: "#181F25",
  darkBackground: "#27262c",
};

const theme = createTheme({
  palette: {
    common: {
      textGray: colors.textGray,
      textDark: colors.textDark,
      textLight: colors.textLight,
      lightPurple: colors.lightPurple,
      lightGrayBg: colors.lightGrayBg,
    },
    primary: {
      main: colors.purple,
      contrastText: colors.white,
      light: colors.white,
    },
    secondary: {
      main: colors.pink,
      contrastText: colors.white,
      light: colors.white,
    },
    success: {
      main: colors.green,
      contrastText: colors.white,
      light: colors.white,
    },
    blueBlack: {
      main: colors.blue,
      contrastText: common.white,
      light: common.white,
    },
    white: {
      main: colors.white,
      contrastText: colors.white,
      light: colors.white,
    },
    text: {
      primary: colors.textLightGray,
      secondary: colors.textGray,
    },

  },
  typography: {
    fontFamily: [
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    allVariants: {
      fontFamily: `"Kanit", sans-serif`,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          textTransform: "capitalize",
        },
      },
    },
  },
});

export default theme;
