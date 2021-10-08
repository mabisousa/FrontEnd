import React, {useCallback, useContext, useRef} from 'react';
import { Container, Inputs,  FormButton, ImgLogo, HoldButton } from './style';
import logo from "../../assets/logo.svg"
import { FormHandles } from "@unform/core"
import { Form } from '@unform/web'
import * as Yup from "yup"
import { AuthContext } from '../../hooks/Auth';
import getValidationErrors from '../../utils/getValidationErrors';
import Input from '../../components/Input';
import { useToast } from '../../hooks/toast';
import { useHistory } from 'react-router-dom'

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

      handleAddToast({
        type: 'error',
        title: 'Erro de autenticação',
        description: 'Ocorreu um erro ao fazer login, verifique suas credenciais.',
      })
    }      
  },[ signIn, handleAddToast, history ]);

  return (
    <>
      <Container>
        <Inputs>
          <Form ref={ formRef } onSubmit={ handleSubmit }>
            <ImgLogo src={logo} alt="WEG" />
            <Input name="email" type="text" placeholder=" ">Usuário</Input>
            <Input name="senha" type="password" placeholder=" ">Senha</Input>
            <HoldButton><button>Esqueceu a senha?</button></HoldButton>
            <FormButton type="submit" value="Entrar"/>
          </Form>
        </Inputs>
      </Container>
    </>
  )
};

export default Login;