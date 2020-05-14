import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

import styles from "./TopNav.module.css";

export default function TopNav (){
    return (
    <AppBar position="static" className={styles.TopNav}>
    <Toolbar variant="dense"  className={styles.TopNavBar}>
      <IconButton edge="start" color="inherit" aria-label="menu">
      </IconButton>
      <Typography variant="h6" color="inherit">
        Mask Recognizer
      </Typography>
    </Toolbar>
  </AppBar>);
}
