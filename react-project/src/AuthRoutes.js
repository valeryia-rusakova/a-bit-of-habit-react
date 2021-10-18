import {Route, Switch} from "react-router-dom";
import React from "react";
import Signup from "./components/Signup";
import Login from "./components/Login";

export const AuthRoutes = () => (
    <Switch>
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
    </Switch>
 )