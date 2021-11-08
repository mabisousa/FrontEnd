import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styles/global';
import Routes from './routes';
import AuthProvider from './hooks';


const App = () => {  
  return (
  <>
    <BrowserRouter>
      <AuthProvider>
        <Routes/>
      </AuthProvider>

      <GlobalStyle/>
    </BrowserRouter>
  </>
  )
};

export default App;