import { IconButton, Tooltip } from "@mui/material";
import { useTheme } from "../layouts/Provider"
import Brightness7Icon from '@mui/icons-material/Brightness7';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import { useTheme as useThemeReactHook } from '@mui/material/styles';

export default function ThemeChanger () {
  const theme = useThemeReactHook();
  const themeChange = useTheme();
  return (
    <Tooltip title='Change Theme'>
      <IconButton onClick={themeChange.toggleColorMode}>
        { theme.palette.mode === 'dark' ? <Brightness7Icon/> : <ModeNightIcon/>}
      </IconButton>
    </Tooltip>
  )
}
