import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';
import Login from '../pages/Login';
import Aprovacao from '../pages/Aprovacao';
import Consultores from '../pages/Consultores';
import Home from '../pages/Home/index';
import AprovacaoTest from '../pages/AprovacaoTest';

interface theme{
  toggleTheme(): void
}

const Routes: React.FC<theme> = (toggleTheme) => (
  <Switch>
    <Route path="/" exact component={Login}/>
    <Route path="/home" exact component={Home} isPrivate/>
    <Route path="/aprovacao" exact component={Aprovacao} isPrivate/>
    <Route path="/aprovacaoteste" exact component={AprovacaoTest} isPrivate/>
    <Route path="/consultores" component={Consultores} isPrivate/>
  </Switch>
  );

export default Routes;
