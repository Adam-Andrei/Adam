import { Button, Card, CardActionArea, CardContent, CardHeader, CardMedia, Dialog, DialogActions, DialogContent, IconButton, Stack, Typography,Tooltip } from "@mui/material";
import technical from "../data/technologies.json";
import { useState } from "react";
import { NavigateBefore, NavigateNext } from "@mui/icons-material";
import { styled } from '@mui/material/styles';
import { tooltipClasses } from '@mui/material/Tooltip';

const ProjectComponent = () => {
  const [ rotation, setRotation ] = useState(0);
  const [ openDialog, setOpenDialog ] = useState(false);
  const [ dialogImageCounter, setDialogImageCounter] = useState(0)

  const HtmlTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }}/>
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme,
      color: theme,
      maxWidth: 220,
    },
  }));

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
              {
                technical.projects[rotation].img[dialogImageCounter].slice(-1) === "4" ? 
                <video width={900} height={450} controls>
                  <source src={process.env.PUBLIC_URL+'/image/'+technical.projects[rotation].img[dialogImageCounter]}/>
                </video>
                :
                <img alt={technical.projects[rotation].name} width="100%" src={process.env.PUBLIC_URL+'/image/'+(technical.projects[rotation].img[dialogImageCounter] === "" ? "noImage.jpg" : technical.projects[rotation].img[dialogImageCounter])}/>
              }
              
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
            <HtmlTooltip title={

              <>
              <Typography variant={"subtitle1"} gutterbottom>
                Project Tech Stack
              </Typography>
              <Typography variant={"subtitle2"} gutterbottom>
              {
                technical.projects[rotation].technologies.map((element,i,total) => {
                  return(
                      <>
                        {i+1 === total.length ? element : element+ ", "}
                      </>
                    )
                  })
                }
              </Typography>
              </>

            } placement={"right"}>
              <CardHeader title={technical.projects[rotation].name}/>
            </HtmlTooltip>
            <CardActionArea onClick={() => setOpenDialog(true)}>
              <CardMedia
                component={technical.projects[rotation].img[0].slice(-1) === "4"? "video" : "img"}
                height="140"
                // image={process.env.PUBLIC_URL+'/image/'+(technical.projects[rotation].img[0] === "" ? "noImage.jpg" : technical.projects[rotation].img[0])}
                src={process.env.PUBLIC_URL+'/image/'+(technical.projects[rotation].img[0] === "" ? "noImage.jpg" : technical.projects[rotation].img[0])}
                autoPlay
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