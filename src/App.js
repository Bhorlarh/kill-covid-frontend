import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/login/login.js';
import './App.css';
import Signup from "./pages/signup/sign-up.js";



function App() {
  return (
    <div>
        <Switch>
          <Route path="/Login" component={Login} />
          <Route path="/" component={Signup} />
      </Switch>
    </div>
      
  );
}

export default App;
