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

    const [data, setData] = useState<AuthState>(() => {

        const jwt = localStorage.getItem("@WEGusers:token");
        const usuario = localStorage.getItem("@WEGusers:usuario");

            if(jwt && usuario) {
                return { jwt, usuario: JSON.parse(usuario) };
            }

        return {} as AuthState;
    });

    const signIn = useCallback(async ({ email, senha }) => {
        
        const response = await api.post("authenticate", {
            email,
            senha,
        });
        console.log(response.data)
        const { jwt, usuario } = response.data;

        localStorage.setItem("@WEGusers:token", jwt);
        localStorage.setItem("@WEGusers:usuario", JSON.stringify(usuario));
            
        setData({jwt, usuario});

    }, []);

    const signOut = useCallback(() => {
        localStorage.removeItem("@WEGusers: token");

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