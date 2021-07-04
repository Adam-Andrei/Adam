import React from "react";
import { Grid, IconButton } from "@material-ui/core";
import { LinkedIn, Email, GitHub } from '@material-ui/icons';

const SocialComponent = () => {

  const toURl = (data) => {
    window.open(data,"_blank");
  };

  const openApp = (data) => {
    window.open("mailto:"+data);
  };

  return (
    <Grid item container xs={2} justify='center' spacing={1} style={{border:'1px solid white',borderRadius:50,padding:'0 0 0 0'}}>
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