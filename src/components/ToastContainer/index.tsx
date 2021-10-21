import React from "react";
import { Container } from "./style";
import { useTransition } from "react-spring";
import Toast from "./Toast";
import { messagemContent } from "../../hooks/toast";

interface ContainerProps{
  messagem: messagemContent[];
}

const ToastContainer: React.FC<ContainerProps> = ({ messagem }) => {
  const handleMessagensWithTransition = useTransition(
    messagem, (messagem) => messagem.id,
    {
      from: { right: "-120%" },
      enter: { right: "0%" },
      leave: { right: "-120%" }
    }
  )

  return(
    <Container>
      {handleMessagensWithTransition.map(({item, key, props}) =>(
        <Toast key={key} style={props} messagem={item}/>
      ))}
    </Container>
  )
}

export default ToastContainer;
