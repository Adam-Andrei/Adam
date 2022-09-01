import React from "react";
import { Grid, IconButton } from "@mui/material";
import { LinkedIn, Email, GitHub } from '@mui/icons-material';

const SocialComponent = () => {

  const toURl = (data) => {
    window.open(data,"_blank");
  };

  const openApp = (data) => {
    window.open("mailto:"+data);
  };

  return (
    <Grid container justifyContent='center' alignItems='center' spacing={1} >
      <Grid item>
        <IconButton size='small' onClick={()=>toURl("https://github.com/LongBOI-nekoshka")}>
          <GitHub fontSize='small'/>
        </IconButton>
      </Grid>
      <Grid item>
        <IconButton size='small' onClick={()=>toURl("https://www.linkedin.com/in/adam-andrei-sobremonte-812683196/")}>
          <LinkedIn fontSize='small'/>
        </IconButton>
      </Grid>
      <Grid item>
        <IconButton size='small' onClick={()=>openApp("adamsobremonte@gmail.com")}>
          <Email fontSize='small'/>
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default SocialComponent;