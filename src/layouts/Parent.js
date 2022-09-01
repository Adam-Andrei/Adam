import { Box } from "@mui/material";
import useWindowSize from "../hooks/useWindowSize";

const Parent = (props) => {
  const {height, width} = useWindowSize();

  return (
    <Box sx={{
      width: width,
      height: height,
      bgcolor: 'background.default',
      color: 'text.primary',
    }}>
      {props.children}
    </Box>
  );
};

export default Parent;