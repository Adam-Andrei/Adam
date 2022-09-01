import { Button, Card, CardActionArea, CardContent, CardHeader, CardMedia, Dialog, DialogActions, DialogContent, IconButton, Stack, Typography } from "@mui/material";
import technical from "../data/technologies.json";
import { useState } from "react";
import { NavigateBefore, NavigateNext } from "@mui/icons-material";

const ProjectComponent = () => {
  const [ rotation, setRotation ] = useState(0);
  const [ openDialog, setOpenDialog ] = useState(false);
  const [ dialogImageCounter, setDialogImageCounter] = useState(0)
  return (
    <Stack spacing={1} justifyContent='center' alignItems='center'>
      <Typography variant="h5">Projects that I made or part of</Typography>
      <Stack spacing={1} justifyContent='center' alignItems='center' direction='row'>
        <Dialog 
          open={openDialog}
          onClose={() => {
            setOpenDialog(false)
          }}
          fullScreen
        >
          <DialogContent>
            <Stack spacing={1} direction='row'>
              <img width="100%" src={process.env.PUBLIC_URL+'/image/'+technical.projects[rotation].img[dialogImageCounter]}/>
            </Stack>
          </DialogContent>
          <DialogActions>
            <Button
              variant="outlined"
              onClick={() => setDialogImageCounter((prev) => prev-=1)}
              disabled={dialogImageCounter === 0}
            >
              Back
            </Button>
            <Button
              variant="outlined"
              onClick={() => setDialogImageCounter((prev) => prev+=1)}
              disabled={dialogImageCounter === technical.projects[rotation].img.length -1}
            >
              Next
            </Button>
            <Button
              color='secondary'
              variant="contained"
              onClick={()=>{
                setDialogImageCounter(0);
                setOpenDialog(false);
              }}
            >
              Close
            </Button>
          </DialogActions>
        </Dialog>
        <IconButton 
          onClick={() => setRotation((prev) => (prev-=1))}
          disabled={rotation === 0 ? true : false}
        >
          <NavigateBefore/>
        </IconButton>
        <Card sx={{ width: 345, height:345 }}>
            <CardHeader title={technical.projects[rotation].name}/>
            <CardActionArea onClick={() => setOpenDialog(true)}>
              <CardMedia
                component="img"
                height="140"
                image={process.env.PUBLIC_URL+'/image/'+technical.projects[rotation].img[0]}
              />
            </CardActionArea>
            <CardContent>
              <Typography>
                {
                  technical.projects[rotation].description
                }
              </Typography>
            </CardContent>
        </Card>
        <IconButton
          onClick={() => setRotation((prev) => (prev+=1))}
          disabled={rotation === technical.projects.length - 1 ? true : false}
        >
          <NavigateNext/>
        </IconButton>
      </Stack>
    </Stack>
  );
};

export default ProjectComponent;