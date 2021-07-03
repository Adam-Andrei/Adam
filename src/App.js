import React,{Fragment} from "react";
import { Grid, Typography, Box, Slide, Grow, Avatar } from "@material-ui/core";

function App() {
  return (
    <Fragment>
      <Box mt={4}>
        <Grid 
          container 
          direction='column' 
          alignItems='center' 
          justify='center'
          spacing={4}
        >
          <Grid item>
            <Grow
              in={true}
              style={{ transformOrigin: '0 0 0' }}
              {...(true ? { timeout: 1000 } : {})}
            >
              <Avatar src={'https://bit.ly/3xkYahG'}/>
            </Grow>
          </Grid>
          <Grid item xs={6}>
            <Slide 
              in={true} 
              direction='right'
              {...(true ? {timeout:1000} : {})}
            >
              <Typography variant='body2'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Curabitur lacinia tristique lorem a feugiat. 
                Nullam pharetra, leo et tristique tincidunt, 
                nunc turpis imperdiet est, non commodo augue odio 
                sit amet nunc. Nam a neque euismod, commodo est ac, 
                iaculis diam. Integer vitae auctor quam. Praesent urna sem,
                sollicitudin id tellus et, lobortis lacinia ante. 
                Etiam vel porttitor purus. Vivamus convallis cursus ipsum nec placerat. 
                Curabitur cursus metus et dui ullamcorper fringilla vel eu tellus. 
                Vestibulum in iaculis lorem. Nullam et lobortis quam, 
                vitae varius ex. Donec vel erat egestas, blandit risus in,
                feugiat sem. Suspendisse at aliquam urna. 
                Quisque rhoncus dui a lacus tincidunt efficitur. 
                Sed nisi elit, pulvinar vel tristique a, maximus a lacus. 
                Cras non est sed dui dapibus mollis. 
                Vestibulum nec finibus ex.
              </Typography>
            </Slide>
          </Grid>
          <Grid item xs={6}>
            <Slide 
              in={true} 
              direction='left'
              {...(true ? {timeout:1000} : {})}
            >
              <Typography variant='body2'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Curabitur lacinia tristique lorem a feugiat. 
                Nullam pharetra, leo et tristique tincidunt, 
                nunc turpis imperdiet est, non commodo augue odio 
                sit amet nunc. Nam a neque euismod, commodo est ac, 
                iaculis diam. Integer vitae auctor quam. Praesent urna sem,
                sollicitudin id tellus et, lobortis lacinia ante. 
                Etiam vel porttitor purus. Vivamus convallis cursus ipsum nec placerat. 
                Curabitur cursus metus et dui ullamcorper fringilla vel eu tellus. 
                Vestibulum in iaculis lorem. Nullam et lobortis quam, 
                vitae varius ex. Donec vel erat egestas, blandit risus in,
                feugiat sem. Suspendisse at aliquam urna. 
                Quisque rhoncus dui a lacus tincidunt efficitur. 
                Sed nisi elit, pulvinar vel tristique a, maximus a lacus. 
                Cras non est sed dui dapibus mollis. 
                Vestibulum nec finibus ex.
              </Typography>
            </Slide>
          </Grid>
        </Grid>
      </Box>
    </Fragment>
  );
}

export default App;
