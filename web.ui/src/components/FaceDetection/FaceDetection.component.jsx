import React, { useContext } from 'react';
import Paper from '@material-ui/core/Paper';
import * as cvstfjs from '@microsoft/customvision-tfjs';

import { Context } from "../../context/index";

// components
import WebCam from "../WebCam/WebCam.component";

// styles
import styles from "./FaceDetection.module.css";
import { analyzeImage } from "./resource";

export default function FaceDetection (){
  const user = useContext(Context);
  const webcamRef = React.useRef(null);
  const capture = React.useCallback(() => {
        user.setLoading(); 
        const imageSrc = webcamRef.current.getScreenshot();
        analyzeImage(imageSrc)
          .then(response =>{ 
            user.setLoading(); 
            user.setPrediction(response);
            console.log(response);
          });
    },[webcamRef]);
  
    return (
      <div className={styles["wrapper"]}>
          <Paper  
            className={styles["FaceDetectionContainer"]}
            >
              <h4>Mask Detection</h4>
              <button onClick={capture}>Snap</button>
              <div className={styles["webContainer"]}>
                <WebCam childRef={webcamRef}/>
              </div>
            </Paper>
      </div>);
}