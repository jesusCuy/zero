import React, { useContext } from 'react';
import Paper from '@material-ui/core/Paper';

import styles from "./FaceDetectionInfo.module.css";


import { Context } from "../../context/index";

const typeTags = {
    NoMask : "NoMask",
    Mask: "Mask"
};
const threshold = 50;

export default function FaceDetectionInfo (){
    const user = useContext(Context);
    const hasAccess = () => {
        const prediction = user.prediction
        let result = {isValid: false};
        if(prediction.value === 0 ||
            prediction.value < threshold ||
            (prediction.value > threshold && prediction.type === typeTags.NoMask )){
            return {
                isValid: false,
                text: "Cubrebocas incorrecto o nulo"
            };
        }
        if(prediction.value > 30 && prediction.type === typeTags.Mask){
            result = {
                isValid:true,
                text:"Cubrebocas correcto"
            }
        };
        return result;
    };

    const getPrediction = () => {
        const prediction = user.prediction;
        if(!prediction.value || 
            prediction.value < threshold ||
            prediction.type === typeTags.NoMask
        ) return;

        return prediction.type + ": "+prediction.value+"%"
    };

    return (
        <div className={styles["wrapper"]}>
            <Paper 
                className={styles["FaceDetectionContainerInfo"]} 
                elevation={3}>
                    <h4>Información de analisis</h4>
                    <div className={styles["detectionResult"]}>
                        <div className={styles["infoGroup"]}>
                            <label>Locación</label>
                            <p>{user.location}</p>
                        </div>

                        <div  className={styles["infoGroup"]}>
                            <label>Zona</label>
                            <p>{user.area}</p>
                        </div>

                        <div  className={styles["infoGroup"]}>
                            <label>Detección</label>
                            <div className={styles[hasAccess().isValid ? "accessApprove": "accessReject"]}>
                                <p>{hasAccess().text}</p>
                                <p>{getPrediction()}</p>
                            </div>
                        </div>
   
                    </div>
            </Paper>
        </div>);
}