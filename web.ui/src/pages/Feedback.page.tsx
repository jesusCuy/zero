import React, {FunctionComponent} from "react";
import TopNav from "../components/TopNav/TopNav.component";

import FaceDetection from "../components/FaceDetection/FaceDetection.component";
import FaceDetectionInfo from "../components/FaceDetectionInfo/FaceDetectionInfo.component";

import "../App.css";

interface Props {
}

const FeedbackPage : FunctionComponent<Props> = () => {
    return (
        <div className="FeedbackPageContainer">
            <TopNav />
            <div className="FeedbackDetectionWrap">
                <FaceDetection />
                <FaceDetectionInfo />
            </div>
        </div>
    );
};

export default FeedbackPage;
