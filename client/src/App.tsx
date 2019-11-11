import React from "react";
import { Switch, Route } from "react-router-dom";

import { GlobalStyles } from "./styles/normalize";
import Message from "./views/components/message/message.index";

import PatientList from "./views/routes/patient-list/patient-list.index";
import PatientDetails from "./views/routes/patient-details/patient-details.index";

const App: React.FC<{ props?: object }> = props => {
  return (
    <>
      {/* Normalizes the browser default css */}
      <GlobalStyles></GlobalStyles>
      {/* Configure routes for application     */}
      <Switch>
        <Route exact path="/patient" component={PatientDetails} />
        <Route path="/" component={PatientList} />
        {/* If route is not matching render 404 page */}
        <Route
          render={() => (
            <div className="container">
              <Message message="Page Not found"></Message>
            </div>
          )}
        />
      </Switch>
    </>
  );
};

export default App;
