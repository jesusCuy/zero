import React, { FunctionComponent } from "react";
import Webcam from "react-webcam";
 


interface Props {
    childRef?: any
}

const WebCam : FunctionComponent<Props> = ({childRef}) => {
    return(<Webcam   
            id="webCam"
            audio={false} 
            height={'100%'} 
            width={"100%"}
            screenshotFormat="image/jpeg"
            ref={childRef}
            />);
};

export default WebCam;