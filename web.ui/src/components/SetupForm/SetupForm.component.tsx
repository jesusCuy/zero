import React from 'react';
import Paper from '@material-ui/core/Paper';
import MtTextField from '@material-ui/core/TextField';
import { FormControl } from '@material-ui/core';
import Button from '@material-ui/core/Button';

import styles from "./SetupForm.module.css";

import { withStyles } from '@material-ui/core/styles';

const TextField = withStyles({
    root: {
      '& label.Mui-focused': {
        color: '#00d397',
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: '#384c53',
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: '#384c53',
        },
        '&:hover fieldset': {
          borderColor: '#384c53',
        },
        '&.Mui-focused fieldset': {
          border:"1px solid #384c53"
        },
      },
    },
  })(MtTextField);

export default function TopNav (){
    return (
        <div className={styles["SetupFormWrapper"]}>
            <Paper  elevation={3} className={styles["SetupForm"]}> 
                <h3 className={styles["SetupForm_Title"]}>Welcome to <b>Mask Recognizer</b></h3>   
                <p className={styles["formDescription"]}>
                    Before before to use the mask detection please add the current location and area.
                </p> 
                <FormControl className={styles["formControlGroup"]}>
                    <TextField 
                        id="outlined-location" 
                        label="Location" 
                        type="text" 
                        variant="outlined"
                        className={styles["inputForm"]}
                    />
                     <TextField 
                        id="outlined-area" 
                        label="Area" 
                        type="text" 
                        variant="outlined"
                        className={styles["inputForm"]}
                    />
                    <Button 
                        variant="contained" 
                        size="large" 
                        color="primary"
                        className={styles["accessButton"]}>
                        Access
                    </Button>
                </FormControl>
            </Paper>
        </div>
    );
};