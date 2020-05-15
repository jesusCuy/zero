import React, { useContext } from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

import { Context } from "../../context/index";

// components
import WebCam from "../WebCam/WebCam.component";

// styles
import styles from "./FaceDetection.module.css";
import { analyzeImage } from "./resource";
import api from '../../api';
import { useHistory } from 'react-router-dom';

export default function FaceDetection () {
  const history = useHistory();
  const user = useContext(Context);
  const webcamRef = React.useRef(null);
  const capture = React.useCallback(() => {
        user.setLoading(); 
        const imageSrc = webcamRef.current.getScreenshot();
        analyzeImage(imageSrc)
          .then(response =>{ 
            user.setLoading(); 
            user.setPrediction(response);

            const model = {
              SectorId: 1,
              Incident: response.type === "NoMask",
              Description: response.type === "Mask" ? "Deteccion de cubrebocas" : "Incidencia de cubrebocas !!"
            };
            api.sendMaskLog(model).then(res => {
              console.log("maskLog response", res);
            }, err => {
                console.error(err);
            });
          });
    },[webcamRef]);

    const goFeedback = () => {
      history.push('/dashboard');
    }
  
    return (
      <div className={styles["wrapper"]}>
          <Paper  
            className={styles["FaceDetectionContainer"]}
            >
              <Button 
                  variant="contained" 
                  size="large" 
                  color="primary"
                  className={styles["analyzeButton"]}
                  onClick={capture}
                  >
                  Empezar detección
              </Button>
              <Button 
                  variant="contained" 
                  size="large" 
                  color="primary"
                  className={styles["dashboardButton"]}
                  onClick={goFeedback}>
                  Ver historial
              </Button>
              <div className={styles["webContainer"]}>
                <WebCam childRef={webcamRef}/>
              </div>
            </Paper>
      </div>);
}