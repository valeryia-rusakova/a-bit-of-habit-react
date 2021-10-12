import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import LoginPage from './components/pages/LoginPage';
import SignupPage from "./components/pages/SignupPage";
import ProfilePage from "./components/pages/ProfilePage";
import MainPage from "./components/pages/MainPage";



class App extends Component {
  render() {
    return (
      <div>
        <Switch>
            <Route path="/login" component={LoginPage}/>
            <Route path="/signup" component={SignupPage}/>
            <Route path="/profile" component={ProfilePage}/>
            <Route path="/" component={MainPage}/>
        </Switch>
      </div>
    );
  }
}

export default App;