import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import light from './styles/themes/light';
import dark from './styles/themes/dark';
import Header from './components/Header';
import usePersistedState from './utils/usePersistedState';

import GlobalStyle from './styles/global';
import Routes from './routes';
import AuthProvider from './hooks';


const App = () => {
  const [tema, setTema] = usePersistedState<DefaultTheme>('tema', light);

  const alternarTema = () => {
    setTema(tema.titulo === 'light' ? dark : light);
    window.location = window.location
  };
  
  return (
  <>
    <ThemeProvider theme={tema}>
      <BrowserRouter>
        <AuthProvider>
          <Routes/>
        </AuthProvider>
        <Header alternarTema={alternarTema}/>

        <GlobalStyle/>
      </BrowserRouter>
    </ThemeProvider>
  </>
  )
};

export default App;