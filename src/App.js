import React, { Component, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';
import LoginSingUpPage from './components/layout/login_signup_layout.js';
import homePage from './components/layout/homePage'
import chooseIt from './components/layout/chooseIt';
import { action, createStore, StoreProvider, useStore, useActions } from 'easy-peasy';

import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebase';

const store = createStore({
  user: {
    userData: {},
    setUser: action((state, user) => {
      state.userData = user;
    })
  }
});

const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseAppAuth = firebaseApp.auth();
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

function Routes(props) {
  const setUser = useActions(actions => actions.user.setUser)

  useEffect(() => {
    if (props.user) {
      setUser(props.user)
    }
  })

  return (<Router>
    <div className="App">
      <Switch>
        <Route exact path='/' render={(p) => props.user ? <Redirect to="/home" /> : <LoginSingUpPage {...p} {...props} />} />
        <Route exact path='/home' component={homePage} />
        <Route exact path='/chooseit' component={chooseIt} />
      </Switch>
    </div>
  </Router>
  )
}

function App(props) {

  return (
    <StoreProvider store={store}>
      <Routes {...props} />
    </StoreProvider>
  );
}

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App)
