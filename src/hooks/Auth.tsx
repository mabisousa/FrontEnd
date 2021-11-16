import React, { createContext, useCallback, useContext, useState} from "react";
import api from "../services/api";

interface SignInCredentials {
  email: string,
  senha: string,
}

interface AuthState {
  jwt: string,
  usuario: object,
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

  const [dado, setDado] = useState<AuthState>(() => {

    const jwt = localStorage.getItem("@WEGusers:token");
    const usuario = localStorage.getItem("@WEGusers:usuario");

    if(localStorage.getItem("Fontsize")){
      document.body.style.fontSize=`${localStorage.getItem("Fontsize")}`;
    }

    if(jwt && usuario) {
      return { jwt, usuario: JSON.parse(usuario)};
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, senha }) => {
      
    const resposta = await api.post("authenticate", {
      email,
      senha,
    });
      
    const { jwt, usuario } = resposta.data;

    localStorage.setItem("@WEGusers:token", jwt);
    localStorage.setItem("@WEGusers:usuario", JSON.stringify(usuario));
    
    setDado({jwt, usuario});

  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem("@WEGusers: token");
    localStorage.removeItem("@WEGusers: usuario");

    setDado({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{signIn, signOut, usuario: dado.usuario}}>
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