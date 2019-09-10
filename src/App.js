import React from 'react';
// import logo from './logo.svg';
import './App.css';

import Error from './pages/Error';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import {Route, Switch } from 'react-router-dom' ;
import Navbar from './components/Navbar';

function App() {
  return (
  <>
  <Navbar />
    <Switch>
        <Route exact path='/' component={Home} />  
        <Route exact path='/room' component={Rooms} />  
        <Route exact path='/rooms/:slug1' component={SingleRoom} />  
        <Route component={Error} />
    </Switch>
  </>
  );
}

export default App;
