import React, { ButtonHTMLAttributes } from "react";
import { Container } from './style'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

function activeclass() {
    var step = document.getElementById("3");
    step?.classList.add("active");
    console.log(step);
}
const FinishButton: React.FC <ButtonProps>= (props) => (
    <Container type="button" {...props} onClick={ activeclass }>
        {props.children}
    </Container>
)

export default FinishButton;