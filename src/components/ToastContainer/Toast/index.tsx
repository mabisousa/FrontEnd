import React, { useEffect } from "react";
import { FiCheckCircle, FiInfo, FiXCircle } from "react-icons/fi";
import { Container } from "./style";
import { messagemContent, useToast } from "../../../hooks/toast"

interface ToastMessage {
  messagem: messagemContent;
  style: object;
}

const icons = {
  info: <FiInfo size={24}/>,
  error: <FiXCircle size={24}/>,
  success: <FiCheckCircle size={24}/>
}

const Toast: React.FC<ToastMessage> = ({messagem, style}) => {

  const { handleRemoverToast } = useToast();

  useEffect(() => {
    const handleTimer = setTimeout(() => {
      handleRemoverToast(messagem.id);
    }, 3000)

    return () => {
      clearTimeout(handleTimer);
    }
  }, [ handleRemoverToast, messagem.id])

  return (
    <Container type={messagem.type} hasDescription={!!messagem.description} style={style}>
      {icons[messagem.type || "info"]}
      <div>
        <strong>{messagem.title}</strong>
        {messagem.description && <p>{messagem.description}</p>}
      </div>

      <button onClick={() => handleRemoverToast(messagem.id)}>
        <FiXCircle size={20}/>
      </button>
    </Container>
  )
}

export default Toast;