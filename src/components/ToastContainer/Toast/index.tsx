import React, { useEffect } from "react";
import { FiCheckCircle, FiInfo, FiXCircle } from "react-icons/fi";
import { Container } from "./style";
import { messageContent, useToast } from "../../../hooks/toast"

interface ToastMessage {
  message: messageContent;
  style: object;
}

const icons = {
  info: <FiInfo size={24}/>,
  error: <FiXCircle size={24}/>,
  success: <FiCheckCircle size={24}/>
}

const Toast: React.FC<ToastMessage> = ({message, style}) => {

  const { handleRemoveToast } = useToast();

  useEffect(() => {
    const handleTimer = setTimeout(() => {
      handleRemoveToast(message.id);
    }, 3000)

    return () => {
      clearTimeout(handleTimer);
    }
  }, [ handleRemoveToast, message.id])

  return (
    <Container type={message.type} hasDescription={!!message.description} style={style}>
      {icons[message.type || "info"]}
      <div>
        <strong>{message.title}</strong>
        {message.description && <p>{message.description}</p>}
      </div>

      <button onClick={() => handleRemoveToast(message.id)}>
        <FiXCircle size={20}/>
      </button>
    </Container>
  )
}

export default Toast;