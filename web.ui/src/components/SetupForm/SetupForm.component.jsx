import React from 'react';
import { useHistory } from "react-router-dom";
import Paper from '@material-ui/core/Paper';
import { FormControl, Select, MenuItem, InputLabel } from '@material-ui/core';
import Button from '@material-ui/core/Button';

import logo from "../../assets/LifeMask_bg.png"
import { Context } from "../../context/index";

import styles from "./SetupForm.module.css";

  const locations = ['Hexaware Technologies México','Plaza Galerías','Soriana'];
  const areas = ['Sector 1','Entrada','Salida de emergencia'];
 

export default function TopNav () {
  const history = useHistory();
  const user = React.useContext(Context);
  const [values, setValues] = React.useState({
      location: locations[0],
      area: areas[0]
    });

  const handleOnClick = () => {
    user.setAreaInformation(values);
    history.push("/feedback");
  };

  const handleChange = event => {
    const {value ,name} = event.target;
    setValues({...values, [name]: value});
  };

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
                      onChange={handleChange}
                      name="location"
                      label="Ubicación"
                      id="outlined-location"
                      value={ values.location }
                    >
                      {locations.map(item =>{
                        return (<MenuItem value={item}>{item}</MenuItem>)
                      })}
                    </Select>
                  </FormControl>
                  <FormControl variant="outlined" className={styles["formControlGroup"]}>
                  <InputLabel id="area-label">Area</InputLabel>
                    <Select
                      onChange={handleChange}
                      name="area"
                      label="Sector"
                      id="outlined-area"
                      value={ values.area }
                    >
                       {areas.map(item =>{
                        return (<MenuItem value={item}>{item}</MenuItem>)
                      })}
                    </Select>
                    </FormControl>
                    <FormControl className={styles["formControlGroup"]}>
                      <Button 
                          variant="contained" 
                          size="large" 
                          color="primary"
                          className={styles["accessButton"]}
                          onClick={handleOnClick}>
                          Acceder
                      </Button>
                    </FormControl>
            </Paper>
        </div>
    );
};