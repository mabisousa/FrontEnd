import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styles/global';
import Routes from './routes';
import RouteProvider from './hooks'

const App: React.FC = () => (
  /*<> Fragment*/
  <>
    <BrowserRouter>
      <RouteProvider>
        <Routes />
      </RouteProvider>
    </BrowserRouter>
    
    <GlobalStyle/>
  </>
);

export default App;