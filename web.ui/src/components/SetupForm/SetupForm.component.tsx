import React from 'react';
import Paper from '@material-ui/core/Paper';
import MtTextField from '@material-ui/core/TextField';
import { FormControl, Select, MenuItem, InputLabel } from '@material-ui/core';
import Button from '@material-ui/core/Button';

import logo from "../../assets/LifeMask_bg.png"

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

  const handleChange = () => {

  }

export default function TopNav () {
  
    return (
        <div className={styles["SetupFormWrapper"]}>
            <Paper  elevation={3} className={styles["SetupForm"]}> 
              <img src={logo} alt="logo" className={styles["SetupForm_logo"]}/>
                <h3 className={styles["SetupForm_Title"]}>Bienvenido</h3>   
                <p className={styles["formDescription"]}>
                    Ingrese a su ubicación y sector.
                </p> 
                <FormControl variant="outlined" className={styles["formControlGroup"]}>
                    <InputLabel id="location-label">Ubicación</InputLabel>
                    <Select
                      label="Ubicación"
                      id="outlined-location"
                      value={ 1 }
                      onChange={handleChange}
                    >
                      <MenuItem value={1}>Hexaware Technologies México</MenuItem>
                      <MenuItem value={5}>Plaza Galerías</MenuItem>
                      <MenuItem value={6}>Soriana</MenuItem>
                    </Select>
                  </FormControl>
                  <FormControl variant="outlined" className={styles["formControlGroup"]}>
                  <InputLabel id="area-label">Area</InputLabel>
                    <Select
                      label="Sector"
                      id="outlined-area"
                      value={ 1 }
                      onChange={handleChange}
                    >
                      <MenuItem value={1}>Sector 1</MenuItem>
                      <MenuItem value={2}>Entrada</MenuItem>
                      <MenuItem value={3}>Salida de emergencia</MenuItem>
                    </Select>
                    </FormControl>
                    <FormControl className={styles["formControlGroup"]}>
                      <Button 
                          variant="contained" 
                          size="large" 
                          color="primary"
                          className={styles["accessButton"]}>
                          Acceder
                      </Button>
                    </FormControl>
            </Paper>
        </div>
    );
};