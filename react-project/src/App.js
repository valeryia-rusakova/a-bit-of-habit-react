import {Provider} from "react-redux";
import store from "./store";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {AuthRoutes} from "./AuthRoutes";
import {MainRoutes} from "./MainRoutes";
import React from "react";
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const App = () => (
    <Provider store={store}>
        <Router>
            <Switch>
              <Route path="/(|signup)" component={AuthRoutes} />
              <Route component={MainRoutes} />
            </Switch>
        </Router>
        <ToastContainer autoClose={2000}/>
    </Provider>
);

export default App;