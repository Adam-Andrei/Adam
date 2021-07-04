import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Card, CardContent, Button} from "@material-ui/core";
import data from '../data/personalInfo.json';
import { map } from 'lodash';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

const PersonalInfo = () => {
  const classes = useStyles();

  return (
    <Grid item container xs={6} spacing={2} container spacing={1}>
      {
        map(data.skills,(index, key) => {
          return (
            <>
              <Grid item xs={6} key={key}>
                <Card className={classes.root}>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">{index.say}</Typography>
                    <Grid item container xs={12} spacing={4}>
                    {
                      map(index.tools,(indexes,keys) => {
                        return (
                            <Grid item xs={4} key={keys}>
                              <Button variant='outlined'>{indexes}</Button>
                            </Grid>
                        )
                      })
                    }
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            </>
          )
        })
      }
    </Grid>
  );
};

export default PersonalInfo;