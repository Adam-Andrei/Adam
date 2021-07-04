import React, { useEffect,useState } from "react";
import { Grid, IconButton, Avatar, Grow } from "@material-ui/core";
import data from '../data/technologies.json';
import { map } from 'lodash';

const TechnologiesComponent = () => {
  const [tech,setTech] = useState([]);

  const getTech = () => {
    setTech(data.technology);
  }

  const toUrl = (data) => {
    window.open(data,"_blank");
  };

  useEffect(()=>{
    getTech();
  },[])

  return (
    <Grid item container xs={5} justify='center' spacing={1} style={{border:'1px solid white',borderRadius:50,padding:'0 0 0 0'}}>
      {
        map(tech, (item, key) => {
          return (
            <Grid item key={key}>
              <Grow 
                in={true} 
                direction='right'
                {...(true ? {timeout:1000} : {})}
              >
              <IconButton size='small' onClick={()=>toUrl(item.url)}>
                <Avatar src={item.icon}/>
              </IconButton>
              </Grow>
            </Grid>
          );
        })
      }
    </Grid>
  );
};

export default TechnologiesComponent;

