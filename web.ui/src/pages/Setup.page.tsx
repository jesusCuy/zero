import React, { FunctionComponent } from "react";
import SetUpForm from "../components/SetupForm/SetupForm.component";


interface Props {
}
const SetUpPage : FunctionComponent<Props> = () => {
    return (
        <div>
            <SetUpForm />
        </div>
    );
};

export default SetUpPage;
