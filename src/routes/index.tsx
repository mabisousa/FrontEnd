import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';
import Login from '../pages/Login';
import Aprovacao from '../pages/Aprovacao';
import Consultores from '../pages/Consultores';
import Home from '../pages/Home/index';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import escuro from '../styles/themes/escuro';
import claro from '../styles/themes/claro';
import usePersistedState from '../utils/usePersistedState';

//alternarTema={alternarTema}
const Routes: React.FC = () => {
  const [tema, setTema] = usePersistedState<DefaultTheme>('tema', claro);

  const alternarTema = () => {
    setTema(tema.titulo === 'claro' ? escuro : claro);
    console.log(tema.titulo)
    if(tema.titulo === 'escuro'){
      document.body.style.background = "#fff"
    } else{
      document.body.style.background = "#1F262B"
    }
    window.document.location.reload()
  };

  return(
    <ThemeProvider theme={tema}>
      <Switch>
        <Route path="/" exact component={Login}/>
        <Route path="/home" exact component={(props) => <Home alternarTema={alternarTema} />} isPrivate/>
        <Route path="/aprovacao" exact component={(props) => <Aprovacao alternarTema={alternarTema} />} isPrivate/>
        <Route path="/consultores" exact component={(props) => <Consultores alternarTema={alternarTema} />} isPrivate/>
      </Switch>
    </ThemeProvider>
  )
};

export default Routes;
