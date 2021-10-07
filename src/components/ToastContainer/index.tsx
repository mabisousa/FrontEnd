import React from "react";
import { Container } from "./style";
import { useTransition } from "react-spring";
import Toast from "./Toast";
import { messageContent } from "../../hooks/toast";

interface ContainerProps{
    message: messageContent[];
}

const ToastContainer: React.FC<ContainerProps> = ({ message }) => {
    const handleMessagesWithTransition = useTransition(
        message,
        (message) => message.id,
        {
            from: { right: "-120%" },
            enter: { right: "0%" },
            leave: { right: "-120%" }
        }
    )

    return(
        <Container>
            {handleMessagesWithTransition.map(({item, key, props}) =>(
                <Toast key={key} style={props} message={item}/>
            ))}
        </Container>
    )
}

export default ToastContainer;
