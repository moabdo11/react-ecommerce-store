import React, { Component } from 'react';
import  { Route, Switch, Link } from 'react-router-dom';
import './App.css';

import HomePage from './pages/Homepage/homepage';
import ShopPage from './pages/Shop/shop';
import Authorization from './pages/Authorization/authorization';
import Header from './components/Header/header';
import  { auth } from './firebase/firebase.utils';



class App extends Component {
  constructor() {
    super ();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
   this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user});

      console.log(user)
    })
  }

  componentWillUnmount () {
    this.unsubscribeFromAuth();
  }

  render () {
  return (
    <div>
      <Header currentUser={this.state.currentUser} />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/auth' component={Authorization} />
      </Switch>
    </div>
  );
  }
}

export default App;
