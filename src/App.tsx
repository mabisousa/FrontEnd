import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import light from './styles/themes/light';
import dark from './styles/themes/dark';
import Header from './components/Header';

import GlobalStyle from './styles/global';
import Routes from './routes';
import AuthProvider from './hooks';


const App = () => {
  const [theme, setTheme] = useState(light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };
  console.log(theme)
  
  return (
  <>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <AuthProvider>
          <Routes toggleTheme={toggleTheme}/>
        </AuthProvider>
        <Header toggleTheme={toggleTheme}/>

        <GlobalStyle/>
      </BrowserRouter>
    </ThemeProvider>
  </>
  )
};

export default App;