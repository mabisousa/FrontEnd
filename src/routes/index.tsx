import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Aprovacao from '../pages/Aprovacao';
import Consultores from '../pages/Consultores';
import Projeto from '../pages/Home/index';
import Projeto2 from '../pages/display';
import popUp from '../pages/projectPopUp/index';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Login}/>
    <Route path="/aprovacao" exact component={Aprovacao}/>
    <Route path="/consultores" component={Consultores}/>
    <Route path="/projetos" exact component={Projeto}/>
    <Route path="/display2" exact component={Projeto2}/>
    <Route path="/projetos/popUp" exact component={popUp}/>
  </Switch>
  );

export default Routes;
