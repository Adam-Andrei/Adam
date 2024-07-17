import { Avatar, Box, Tooltip, Typography,AvatarGroup } from "@mui/material";
import { Stack } from "@mui/system";
import { useEffect } from "react";
import personal from "../data/personalInfo.json"
import technical from "../data/technologies.json"
import SocialComponent from "./SocialComponent";

const PersonalInfo = () => {

  return (
    <Box sx={{mt:5}}>
      <Stack spacing={1} direction="column" justifyContent='center' alignItems='center'>
        <Stack spacing={1} direction="row">
          <Avatar src={process.env.PUBLIC_URL+'/image/DP.jpg'} sx={{ width: 56, height: 56 }}/>
          <Typography variant="body2" sx={{width:700}}>
            {
              personal.header.setting
            }
          </Typography>
        </Stack>
        <SocialComponent/>
        <Box border="1px solid #F6F6F6" p={2} borderRadius={5}>
          <Stack spacing={2} direction="column" justifyItems='center' alignItems='center'>
            <Typography>
              <strong>
                Technologies that I experience using
              </strong>
            </Typography>
            <Box display="flex" alignItems="center" style={{
              overflowX: "hidden",
              
            }}>
                {
                  technical.technology.map((data) => {
                    return (
                      <Tooltip title={data.name}>
                        <Avatar src={data.icon}/>
                      </Tooltip>
                    )
                  })
                }
            </Box>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default PersonalInfo;