import React, {useCallback, useContext, useRef} from 'react';
import { useHistory } from 'react-router-dom';
import { FormHandles } from "@unform/core";
import { Form } from '@unform/web';
import * as Yup from "yup";

import logo from "../../assets/logo.svg";

import { Container, Inputs,  FormButton, ImgLogo, HoldButton } from './style';

import getValidationErrors from '../../utils/getValidationErrors';
import { AuthContext } from '../../hooks/Auth';
import { useToast } from '../../hooks/toast';
import Input from '../../components/Input';

import { i18n } from '../../translate/i18n';

interface SignInData {
  email: string,
  senha: string,
}

const Login: React.FC = () => {
  
  const formRef = useRef<FormHandles>(null);
  const { signIn } = useContext(AuthContext);
  const { handleAddToast } = useToast();
  const history = useHistory();

  const handleSubmit = useCallback(async (data: SignInData) => {
      
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

      handleAddToast({
        type: 'error',
        title: i18n.t('login.titulo'),
        description: i18n.t('login.titulo'),
      })
    }      
  },[ signIn, handleAddToast, history ]);

  return (
    <>
      <Container>
        <Inputs>
          <Form ref={ formRef } onSubmit={ handleSubmit }>
            <ImgLogo src={logo} alt="WEG" />
            <Input name="email" type="text" placeholder=" ">
              {i18n.t('login.usuario')}
            </Input>
            <Input name="senha" type="password" placeholder=" ">
              {i18n.t('login.senha')}
            </Input>
            <HoldButton>
              <button>
                {i18n.t('login.esqueceuSenha')}
              </button>
            </HoldButton>
            <FormButton type="submit">
              {i18n.t('login.entrar')}
            </FormButton>
          </Form>
        </Inputs>
      </Container>
    </>
  )
};

export default Login;