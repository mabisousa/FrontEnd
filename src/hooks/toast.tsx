import React, { createContext, useState } from "react";
import { useContext } from "react";
import { useCallback } from "react";
import { uuid } from "uuidv4";
import ToastContainer from "../components/ToastContainer"

interface ToastContextData {
  handleAddToast(messagem: Omit<messagemContent, "id">): void,
  handleRemoverToast(id: string): void
} 
export interface messagemContent {
  id: string;
  type?: "success" | "error" | "info",
  title: string,
  description?: string ,
}
const ToastContext =  createContext<ToastContextData>({} as ToastContextData);

const ToastProvider: React.FC = ({ children }) => {

  const [ messagem, setmessagem] = useState<messagemContent[]>([]);
  
  const handleAddToast = useCallback(({ type, title, description }: Omit<messagemContent, "id">) => {
    const id = uuid();
    
    const toast = {
      id,
      type,
      title,
      description
    }

    setmessagem(state => [...state, toast]);
  }, [])

  const handleRemoverToast = useCallback((id: string) => {
    setmessagem(state => state.filter((messagem) => messagem.id !== id));
  }, [])

  return (
    <ToastContext.Provider value={{ handleAddToast, handleRemoverToast}}>
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