import React, { useEffect,useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Card, CardContent, Chip} from "@material-ui/core";
import data from '../data/technologies.json';
import { map } from 'lodash';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const ProjectComponent = () => {
  const classes = useStyles();

  return (
    <Grid  item container xs={5} spacing={2}>
      {
        map(data.projects, (index,key) => {
          return (
            <Grid item xs={6} key={key}>
              <Card className={classes.root}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">{index.name}</Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Technologies
                  </Typography>
                  <Grid container spacing={2}>
                  {
                    map(index.technologies,(indexes,keys) => {
                      console.log(indexes);
                      return (
                        <Grid item xs={4} key={keys}>
                          <Chip
                              label={indexes}
                              clickable
                          />
                        </Grid>
                      )
                    })
                  }
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          );
        })
      }
    </Grid>
  );
};

export default ProjectComponent;