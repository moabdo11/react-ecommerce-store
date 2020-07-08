import React, { Component } from 'react';
import  { Route, Switch} from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';

import HomePage from './pages/Homepage/homepage';
import ShopPage from './pages/Shop/shop';
import Authorization from './pages/Authorization/authorization';
import Header from './components/Header/header';
import  { auth, createUserProfileDocument} from './firebase/firebase.utils';
import { setCurrentUser } from './redux/User/user.actions';



class App extends Component {
 
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

   this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
     if (userAuth) {
       const userRef = await createUserProfileDocument(userAuth);

       userRef.onSnapshot(snapShot => {
         setCurrentUser({
             id: snapShot.id,
             ...snapShot.data()
           });
       });
     } 

     setCurrentUser(userAuth);
    });
  }

  componentWillUnmount () {
    this.unsubscribeFromAuth();
  }

  render () {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/auth' component={Authorization} />
      </Switch>
    </div>
  );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App);
