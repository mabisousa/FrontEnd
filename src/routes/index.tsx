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
    <Route path="/home" exact component={Home}/>
    <Route path="/aprovacao" exact component={Aprovacao}/>
    <Route path="/consultores" component={Consultores}/>
    <Route path="/display2" exact component={Projeto2}/>
  </Switch>
  );

export default Routes;
