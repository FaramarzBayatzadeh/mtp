import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#039be5",
    },
    secondary: {
      main: "#78909c",
    },
  },
});

type Props = {
  children: React.ReactNode; // 👈️ type children
};

var CustomThemeProvider = (props: Props) => {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};

export default CustomThemeProvider;
