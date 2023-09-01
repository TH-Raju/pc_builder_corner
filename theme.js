// theme.js
import { createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    type: "dark", // Set the theme type to dark
    primary: {
      main: "#90caf9", // Customize your primary color
    },
    secondary: {
      main: "#f48fb1", // Customize your secondary color
    },
  },
});

export default darkTheme;
