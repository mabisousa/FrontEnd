
import React, { ButtonHTMLAttributes } from "react";

import { Container } from './style'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const BotaoFinalizar: React.FC <ButtonProps>= (props) => (
  <Container type="button" {...props}>
      {props.children}
  </Container>
)

export default BotaoFinalizar;