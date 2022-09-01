import { amber, indigo, orange } from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState,useMemo, createContext, useContext } from 'react';

const ModeContext = createContext();

export const Provider = (props) => {
  const [mode, setMode] = useState( localStorage.getItem("mode") ?? 'light');
  const colorMode = useMemo(() => ({
    toggleColorMode: () => {
        setMode((prev) => {
          localStorage.setItem("mode", prev === 'light' ? 'dark': 'light');
          return prev === 'light' ? 'dark': 'light'
        })
      }
    }),
    [],
  );
  const theme = useMemo(() => createTheme({
    palette: {
      mode,
      ...(mode === 'light' ? {
        primary: {
          main: indigo['A400'],
        },
        secondary: {
          main: orange[900]
        }
      } : {
        primary:{
          main:'#00e676'
        },
        secondary:{
          main: amber[500]
        }
      })
    }
  }),[mode])

  return (
    <ModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        {props.children}
      </ThemeProvider>
    </ModeContext.Provider>
  )
};

export const useTheme = () =>  {
  return useContext(ModeContext);
}
