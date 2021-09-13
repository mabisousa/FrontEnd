import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';
import Login from '../pages/Login';
import Aprovacao from '../pages/Aprovacao';
import Consultores from '../pages/Consultores';
import Home from '../pages/Home/index';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Login}/>
    <Route path="/home" exact component={Home}/>
    <Route path="/aprovacao" exact component={Aprovacao}/>
    <Route path="/consultores" component={Consultores}/>
  </Switch>
  );

export default Routes;
