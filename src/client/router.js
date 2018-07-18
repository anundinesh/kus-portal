import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import AppLayout from './containers/AppLayout';
import LoginForm from './containers/LoginForm';
import Dashboard from './containers/Dashboard';
import MiniDrawer from './containers/MiniDrawer';



export default function() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" name="login" component={LoginForm} />
        <Route path="/" name="home" component={AppLayout} />
        
      </Switch>
    </BrowserRouter>
  );
}
