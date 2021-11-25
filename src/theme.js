import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  typography: {
    body1_medium: {
      lineHeight: 1.6,
      fontSize: 24,
      fontWeight: 500,
    },
    body2_medium: {
      lineHeight: 1.6,
      fontSize: 18,
      fontWeight: 500,
    },
    p1_italic: {
      lineHeight: 2.6,
      fontSize: 26,
      fontStyle: "italic",
      fontWeight: 800,
    },
    p1_bold: {
      lineHeight: 2.6,
      fontSize: 22,
      fontStyle: "bold",
      fontWeight: 700,
    },
    p1_error: {
      fontStyle: "bold",
      fontWeight: 300,
      color: "red",
    },
    p2_highlighted: {
      fontStyle: "italic",
      fontWeight: 500,
      backgroundColor: "yellow",
    },
  },
});
