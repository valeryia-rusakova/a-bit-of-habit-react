import {Provider} from "react-redux";
import store from "./store";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {AuthRoutes} from "./AuthRoutes";
import {MainRoutes} from "./MainRoutes";
import React from "react";

const App = () => (
    <Provider store={store}>
        <Router>
            <Switch>
              <Route path="/(login|signup)" component={AuthRoutes} />
              <Route component={MainRoutes} />
            </Switch>
        </Router>
    </Provider>
);

export default App;