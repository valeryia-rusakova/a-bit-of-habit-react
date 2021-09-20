

import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';


import Login from './components/Login';
import Signup from "./components/Signup";



class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/login" component={Login}/>
            <Route path="/signup" component={Signup}/>
        </Switch>
      </div>
    );
  }
}

export default App;

