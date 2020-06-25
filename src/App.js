import React from 'react';
import  { Route, Switch, Link } from 'react-router-dom';
import './App.css';

import HomePage from './pages/Homepage/homepage';



function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        {/* {/* <Route exact path='/topics' component={TopicsList} /> */}
        {/* <Route path='/topics/:topicId' component={TopicDetail} /> */} */}
      </Switch>
    </div>
  );
}

export default App;
