import React from 'react';
import  { Route, Switch, Link } from 'react-router-dom';
import './App.css';

import HomePage from './pages/Homepage/homepage';
import ShopPage from './pages/Shop/shop';
import Header from './components/Header/header';



function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        
      </Switch>
    </div>
  );
}

export default App;
