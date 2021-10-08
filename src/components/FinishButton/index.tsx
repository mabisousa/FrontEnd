import React, { ButtonHTMLAttributes } from "react";
import { Container } from './style'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const FinishButton: React.FC <ButtonProps>= (props) => (
  <Container type="button" {...props}>
      {props.children}
  </Container>
)

export default FinishButton;