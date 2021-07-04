import React,{Fragment} from "react";
import { Grid, Typography, Box, Grow, Avatar } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import SocialComponent from "./components/SocialComponent";
import TechnologiesComponent from "./components/TechnologiesComponent";
import ProjectComponent from "./components/ProjectComponent";
import data from "./data/personalInfo.json";

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(16),
    height: theme.spacing(16),
  },
}));

function App() {
  const classes = useStyles();

  return (  
    <Fragment>
      <Box mt={4}>
        <Grid 
          container 
          direction='column' 
          alignItems='center' 
          justify='center'
          spacing={3}
        >
          <Grid container item xs={12} justify='center' direction='column' alignItems='center' spacing={2}>
            <Grid item>
              <Avatar src={'https://bit.ly/3jHhCRC'} className={classes.large}/>
            </Grid>
            <SocialComponent/>
          </Grid>
          <Grid item xs={5}>
            <Grow 
              in={true} 
              direction='right'
              {...(true ? {timeout:1000} : {})}
            >
              <Typography variant='body2'>
                {data.header.setting}
              </Typography>
            </Grow>
          </Grid>
          <TechnologiesComponent/>
          <Grid item xs={6}>
            <Grow 
              in={true} 
              direction='left'
              {...(true ? {timeout:1000} : {})}
            >
              <Typography variant='body2'>
                Projects that I made or helped making.
              </Typography>
            </Grow>
          </Grid>
          <ProjectComponent/>
        </Grid>
      </Box>
    </Fragment>
  );
}

export default App;
