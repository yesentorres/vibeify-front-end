import React, { useEffect, useState } from 'react';
import UserInfo from './UserInfo'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import './ResetOptions.css';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

function ResetOptions(props) {
  const initiateLogout = () => {
    window.open('https://vibeify.herokuapp.com', '_self')
  }

    // Materiul UI Elements Styling 
    const useStyles = makeStyles(theme => ({
      root: {
        flexGrow: 1
      },
      navItems: {
        marginTop: '.75rem'
      },
      logoutButton: {
        marginLeft: "auto",
        paddingTop: '.75rem'
      }
    }));
    const classes = useStyles();

  return (
    <div className="reset-options">
      <Grid container spacing={3}>



<div className="ugh">
<Grid item xs={12}>
  <div className="ugh1">
  <Button variant="contained" color="secondary" onClick={props.onClickCallback1}>Open Playlist in Spotify</Button> 

  </div>

  </Grid>

  <Grid item xs={12}>
    <div className="ugh2">
    <Button variant="contained" color="secondary" onClick={props.onClickCallback2}>Create New Playlist</Button> 

    </div>
  
  </Grid>

</div>


        </Grid>
</div>


  
          
         
       
     
      
  );
}

export default ResetOptions;