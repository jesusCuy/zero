import React from 'react';
import Paper from '@material-ui/core/Paper';
import * as cvstfjs from '@microsoft/customvision-tfjs';

// components
import WebCam from "../WebCam/WebCam.component";

// styles
import styles from "./FaceDetection.module.css";

export default function FaceDetection (){
  const webcamRef = React.useRef(null);
  const capture = React.useCallback(
    async () => {
        debugger;
        const imageSrc = webcamRef.current.getScreenshot();
        let model = new cvstfjs.ObjectDetectionModel();
        await model.loadModelAsync('model.json');
        const image = document.getElementById('webCam');
        const result = await model.executeAsync(image);
        console.log(result);
    },
    [webcamRef]
  );
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