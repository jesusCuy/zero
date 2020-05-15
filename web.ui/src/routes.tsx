import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch
  } from "react-router-dom";

import FeedbackPage from "./pages/Feedback.page"
import SetUpPage from "./pages/Setup.page";
import Dashboard from "./pages/Dashboard";

const Routes = ()=>{
    return (
      <Router>
        <Switch>
            <Route exact path="/" component={SetUpPage} />
            <Route exact path="/feedback" component={FeedbackPage} />
            <Route exact path="/dashboard" component={Dashboard} />
        </Switch>
      </Router>
    )
  };

  export default Routes;