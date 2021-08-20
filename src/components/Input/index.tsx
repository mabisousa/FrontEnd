import { useField } from "@unform/core";
import React, { InputHTMLAttributes, useEffect, useRef } from "react";
import { FormLabel, FormInput, FormDiv } from "./style";

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
        <FormDiv>
            <FormInput hasError={!!error} id='form__input' ref={inputRef} {...props}></FormInput>
            <FormLabel hasError={!!error} id='form__label'>{ children }</FormLabel>
        </FormDiv>  
    </>
     )
}

export default Input;