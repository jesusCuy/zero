import React from 'react';
import Paper from '@material-ui/core/Paper';

import styles from "./FaceDetectionInfo.module.css";

export default function FaceDetectionInfo (){
    return (
        <div className={styles["wrapper"]}>
            <Paper 
                className={styles["FaceDetectionContainerInfo"]} 
                elevation={3}>
                    <h4>Detection info</h4>
            </Paper>
        </div>);
}