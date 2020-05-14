import React from 'react';
import Paper from '@material-ui/core/Paper';

import WebCam from "../WebCam/WebCam.component";

import styles from "./FaceDetection.module.css";

export default function FaceDetection (){
    return (
        <div className={styles["wrapper"]}>
            <Paper 
              elevation={3}  
              className={styles["FaceDetectionContainer"]}
              >
                <h4>Mask Detection</h4>
                <WebCam />
              </Paper>
        </div>);
}