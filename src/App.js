import './App.css';
import React, { useState } from 'react';
import CurrentEmployees from './components/CurrentEmployees.js';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import AddNewEmployee from './components/AddNewEmployee';
import {Switch,Route} from 'react-router-dom';
import Navbar from './components/Navbar.js';
import Home from './components/Home.js';
import { useRadioGroup } from '@mui/material';
function App() {  
  return (
    <Authenticator>
    {({ signOut, user }) => (
      <div>
        <button  className='"btn btn-warning' onClick={signOut}>Sign out</button>
        <Navbar/>
        <Switch>
          <Route render={()=> <Home userDetails={user}/>} path='/Home'/>
          <Route render={()=> <AddNewEmployee/>} path="/AddNewEmployee" />
          <Route render={()=> <CurrentEmployees/>} path="/CurrentEmployees" />
          </Switch>
      </div>
    )}
    </Authenticator>
  );
  
}
export default App;
