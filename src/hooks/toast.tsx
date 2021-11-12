import React, { createContext, useState } from "react";
import { useContext } from "react";
import { useCallback } from "react";
import { uuid } from "uuidv4";
import ToastContainer from "../components/ToastContainer"

interface ToastContextData {
  handleAdicionarToast(messagem: Omit<messagemContent, "id">): void,
  handleRemoverToast(id: string): void
} 
export interface messagemContent {
  id: string;
  tipo?: "sucesso" | "erro" | "info",
  titulo: string,
  descricao?: string ,
}
const ToastContext =  createContext<ToastContextData>({} as ToastContextData);

const ToastProvider: React.FC = ({ children }) => {

  const [ messagem, setMessagem] = useState<messagemContent[]>([]);
  
  const handleAdicionarToast = useCallback(({ tipo, titulo, descricao }: Omit<messagemContent, "id">) => {
    const id = uuid();
    
    const toast = {
      id,
      tipo,
      titulo,
      descricao
    }

    setMessagem(state => [...state, toast]);
  }, [])

  const handleRemoverToast = useCallback((id: string) => {
    setMessagem(state => state.filter((messagem) => messagem.id !== id));
  }, [])

  return (
    <ToastContext.Provider value={{ handleAdicionarToast, handleRemoverToast}}>
      { children }
      <ToastContainer messagem={messagem}/>
    </ToastContext.Provider>
  )
}

function useToast(): ToastContextData {
  const context = useContext(ToastContext);

  if(!context) {
    throw new Error("useToast must be used withing ToastProvider")
  }

  return context;
}

export { useToast, ToastProvider};