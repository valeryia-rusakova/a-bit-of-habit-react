import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import Signup from "./components/Signup";
import Profile from "./components/Profile";
import Main from "./components/Main";



class App extends Component {
  render() {
    return (
      <div>
        <Switch>
            <Route path="/login" component={Login}/>
            <Route path="/signup" component={Signup}/>
            <Route path="/profile" component={Profile}/>
            <Route path="/" component={Main}/>
        </Switch>
      </div>
    );
  }
}

export default App;