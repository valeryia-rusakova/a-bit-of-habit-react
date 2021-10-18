import React from 'react';
import ReactDOM from 'react-dom';
import {MainRoutes} from './MainRoutes';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {AuthRoutes} from "./AuthRoutes";


ReactDOM.render(
    <BrowserRouter>
        <Switch>
          <Route path="/(login|signup)" component={AuthRoutes} />
          <Route component={MainRoutes} />
        </Switch>
    </BrowserRouter>,
  document.getElementById("root")
);


