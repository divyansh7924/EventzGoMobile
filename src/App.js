import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,Switch,Link,Redirect} from 'react-router-dom';
import loginSingUpPage from './components/layout/login_signup_layout.js';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path='/'component={loginSingUpPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
