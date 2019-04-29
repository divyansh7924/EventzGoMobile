import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,Switch,Link,Redirect} from 'react-router-dom';
import loginSingUpPage from './components/layout/login_signup_layout.js';
import homePage from './components/layout/homePage'
import chooseIt from './components/layout/chooseIt';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path='/' component={loginSingUpPage} />
            <Route exact path='/home' component={homePage} />
            <Route exact path='/chooseit' component={chooseIt} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
