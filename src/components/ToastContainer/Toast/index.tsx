import React, { useEffect } from "react";
import { FiCheckCircle, FiInfo, FiXCircle } from "react-icons/fi";
import { Container } from "./style";
import { messagemContent, useToast } from "../../../hooks/toast"

interface ToastMessage {
  messagem: messagemContent;
  style: object;
}

const icones = {
  info: <FiInfo size={24}/>,
  erro: <FiXCircle size={24}/>,
  sucesso: <FiCheckCircle size={24}/>
}

const Toast: React.FC<ToastMessage> = ({messagem, style}) => {

  const { handleRemoverToast } = useToast();

  useEffect(() => {
    const handleTempo = setTimeout(() => {
      handleRemoverToast(messagem.id);
    }, 3000)

    return () => {
      clearTimeout(handleTempo);
    }
  }, [ handleRemoverToast, messagem.id])

  return (
    <Container tipo={messagem.tipo} descricao={!!messagem.descricao} style={style}>
      {icones[messagem.tipo || "info"]}
      <div>
        <strong>{messagem.titulo}</strong>
        {messagem.descricao && <p>{messagem.descricao}</p>}
      </div>

      <button onClick={() => handleRemoverToast(messagem.id)}>
        <FiXCircle size={20}/>
      </button>
    </Container>
  )
}

export default Toast;