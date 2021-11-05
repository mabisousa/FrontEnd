import React, { createContext, useCallback, useContext, useState} from "react";
import api from "../services/api";

interface SignInCredentials {
  email: string,
  senha: string,
}

interface AuthState {
  jwt: string,
  usuario: object,
  responsavel: object
}

interface ContextData {
  signIn(credentials: SignInCredentials): Promise<void>,
  signOut(): void,
  usuario: object,
}

export const AuthContext = createContext<ContextData>(
  {} as ContextData
)

export const AuthProvider: React.FC = ({ children }) => {

  const [data, setData] = useState<AuthState>(() => {

    const jwt = localStorage.getItem("@WEGusers:token");
    const usuario = localStorage.getItem("@WEGusers:usuario");
    const responsavel = localStorage.getItem("@WEGusers:responsavel");

    if(localStorage.getItem("Fontsize")){
      document.body.style.fontSize=`${localStorage.getItem("Fontsize")}`;
    }

    if(jwt && usuario && responsavel) {
      return { jwt, usuario: JSON.parse(usuario), responsavel: JSON.parse(responsavel)};
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, senha }) => {
      
    const response = await api.post("authenticate", {
      email,
      senha,
    });
      
    const { jwt, usuario, responsavel } = response.data;

    localStorage.setItem("@WEGusers:token", jwt);
    localStorage.setItem("@WEGusers:usuario", JSON.stringify(usuario));
    localStorage.setItem("@WEGusers:responsavel", JSON.stringify(responsavel));
    
    setData({jwt, usuario, responsavel});

  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem("@WEGusers: token");
    localStorage.removeItem("@WEGusers: usuario");
    localStorage.removeItem("@WEGusers: responsavel");

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{signIn, signOut, usuario: data.usuario}}>
      { children }
    </AuthContext.Provider>
  )
}

export function useAuth(): ContextData {
  const context = useContext(AuthContext);

  if(!context) {
    throw new Error('useAuth must be used withing an AuthProvider');
  }

  return context;
}