import React, { InputHTMLAttributes, useEffect, useRef } from "react";
import { useField } from "@unform/core";

import { FormLabel, FormInput, Container } from "./style";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string,
}
const Input: React.FC<InputProps> = ({name, children, ...props}) => {

  const inputRef = useRef<HTMLInputElement>(null);
  const { fieldName, error, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value",
    });
  }, [ fieldName, registerField]);

  return (
    <>
      <Container>
        <FormInput erro={!!error} id='form__input' ref={inputRef} {...props}/>
        <FormLabel erro={!!error} id='form__label'>
          { children }
        </FormLabel>
      </Container>  
    </>
  )
}

export default Input;