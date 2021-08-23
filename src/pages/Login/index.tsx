import React, {useCallback, useContext, useRef} from 'react';

import { Main, Inputs,  FormButton, ImgLogo } from './style';
import logo from "../../imgs/logo.svg"

import { FormHandles } from "@unform/core"
import { Form } from '@unform/web'
import * as Yup from "yup"

import { AuthContext } from '../../hooks/Auth';
import getValidationErrors from '../../utils/getValidationErrors';
import Input from '../../components/Input';

import { useHistory } from 'react-router-dom'

interface SignInData {
    email: string,
    senha: string,
}

const Login: React.FC = () => {
  
    const formRef = useRef<FormHandles>(null);

    const { signIn } = useContext(AuthContext);
    const history = useHistory();

    const handleSubmit = useCallback(async (data: SignInData) => {
        console.log(data)
        
        try {
            formRef.current?.setErrors({});

            const schema = Yup.object().shape({
                email: Yup.string()
                .required("E-mail obrigatório")
                .email("Insira um e-mail válido"),
                senha: Yup.string()
                .required("Senha obrigatória"),
            });

            await schema.validate(data, {
                abortEarly: false,
            });

            await signIn({
                email: data.email,
                senha: data.senha
            });
            history.push('home')
        } catch (e) {
            
            if(e instanceof Yup.ValidationError) {

                const errors = getValidationErrors(e);
                formRef.current?.setErrors(errors);

                return
            }
        }
    }, [ signIn, history ]);
    return (
    <>
        <Main>
            <Inputs>
                <Form ref={ formRef } onSubmit={ handleSubmit }>
                    <ImgLogo src={logo} alt="WEG" />

                    <Input name="email" type="text">Usuário</Input>
                    <Input name="senha" type="password">Senha</Input>

                    <FormButton type="submit" value="Entrar"/>
                </Form>
            </Inputs>
        </Main>
    </>
)};

export default Login;