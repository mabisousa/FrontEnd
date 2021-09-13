import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';
import Login from '../pages/Login';
import Aprovacao from '../pages/Aprovacao';
import Consultores from '../pages/Consultores';
import Projeto2 from '../pages/display';
import Home from '../pages/Home/index';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Login}/>
    <Route path="/home" exact component={Home} isPrivate/>
    <Route path="/aprovacao" exact component={Aprovacao} isPrivate/>
    <Route path="/consultores" component={Consultores} isPrivate/>
    <Route path="/display2" exact component={Projeto2} isPrivate/>
  </Switch>
  );

export default Routes;
