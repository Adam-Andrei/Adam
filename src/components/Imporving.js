import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import personal from "../data/personalInfo.json"

const Improving = () => {
  return (
    <Stack spacing={1} direction='column'>
      <Typography variant="h5">
        {
          personal.skills[1].say
        }
      </Typography>
      <Stack spacing={1} direction='row' justifyContent='center' alignItems='center'>
        {
          personal.skills[1].tools.map((data) => {
            return (
              <Typography variant="body2">
                {data}
              </Typography>
            )
          })
        }
      </Stack>
    </Stack>
  );
}

export default Improving;