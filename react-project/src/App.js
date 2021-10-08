import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import Signup from "./components/Signup";
import Profile from "./components/Profile";



class App extends Component {
  render() {
    return (
      <div>
        <Switch>
            <Route path="/login" component={Login}/>
            <Route path="/signup" component={Signup}/>
            <Route path="/profile" component={Profile}/>
        </Switch>
      </div>
    );
  }
}

export default App;