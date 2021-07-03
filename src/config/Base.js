import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blueGrey from "@material-ui/core/colors/blueGrey";
import lightGreen from "@material-ui/core/colors/lightGreen";
import CssBaseline from "@material-ui/core/CssBaseline";

const Base = (props) => {
  const { children } = props;

  const theme = createMuiTheme({
    palette: {
      primary: {
        light: lightGreen[300],
        main: lightGreen[500],
        dark: lightGreen[700]
      },
      secondary: {
        light: blueGrey[300],
        main: blueGrey[500],
        dark: blueGrey[700]
      },
      type: 'dark'
    }
  });

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline/>
      {children}
    </MuiThemeProvider>
  );
};

export default Base;