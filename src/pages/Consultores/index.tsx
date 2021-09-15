import React, { useState, useEffect, useCallback } from 'react';
import { Filters, Title, Form, Consultores, Container, PopUpInfo, Content, Skills, HoldContent, PopUpTable } from './style';
import Profile from "../../components/Profile";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import api from "../../services/api";
import { HiUserCircle } from "react-icons/hi";
import { BsX } from "react-icons/bs";
import Grid from "../../components/Grid";
//import Popup from "../../components/PopupConsultor";


  interface Consultor{
    id: number,
    nome: string,
    status: string,
    usuario: {
      email: string,
    },
    projetos: [
      {
        id: number,
        nome: string,
        status: string,
      }
    ]
    alocacoes: [
      {
      skill: string,
      }
    ]
}
const Login: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [consultores, setConsultor] = useState<Consultor[]>([]);
  const [consult, setConsult] = useState<Consultor>();
  
  const openPopup = useCallback((id: number) => {
    setShowPopup(!showPopup);
    
    setConsult(consultores[id-1]);
    console.log(consult?.usuario)
  },[consultores,consult,setConsult]);

  useEffect(() => {
    api.get("/consultores").then((response) => {
      setConsultor(response.data);
    })
  }, [consultores, setConsultor]);
  
  return (
    <>  
      <Header>
        <p>CONSULTORES</p>
      </Header>
      <Profile/>
      <Menu/>
      <main>
        <Filters>
          <div>
            <Title>CONSULTORES</Title>
              <div id="filter">
                <Form>
                  <label>Nome:</label>
                  <input placeholder="Digite aqui..." />
                </Form>
              </div>
          </div>
        </Filters>

        <Menu/>
        
        <Consultores>
        <table>
        <thead>
          <tr>
            <td>CADASTRO</td>
            <td>NOME</td>
            <td>STATUS</td>
            <td>PROJETOS</td>
            <td>DETALHES</td>
          </tr>
        </thead>
          <tbody>
            {consultores.map((consultor) => (
              <>
              <tr>
                <td>{consultor.id}</td>
                <td>{consultor.nome}</td>
                <td>{consultor.status}</td> 
                <td>{consultor.projetos.length}</td>
                <button onClick={() => openPopup(consultor.id)} id="button"><td> + </td></button>
              </tr>
              
              </>
            ))}
          </tbody>
        </table>
        </Consultores>
      </main>
      
      {showPopup && consult &&
        <Container show={!showPopup}>
        <div id="hold">
        <button onClick={() => openPopup(consult.id)}><BsX/></button>
        <PopUpInfo>
          <header>
            <HiUserCircle/>
            <div id="EmployeeInformation">
                <h1>{consult.id} - {consult.nome}</h1>
                <p>E-mail: {consult.usuario.email}</p>
            </div>
          </header>
        </PopUpInfo>
        <Content>
          <Skills>
            <h5>SKILLS</h5>
            <HoldContent>
                {consult.alocacoes.map((num => (
                  num.skill
                )))}
            </HoldContent>
          </Skills>
          <PopUpTable>
            <table>
              <thead>
                <tr>
                  <td>NÚMERO</td>
                  <td>STATUS</td>
                  <td>PROJETO</td>
                </tr>
              </thead>
              <tbody>
                {consult.projetos.map((projeto => (
                   <tr key={projeto.id}>
                   <td>{projeto.id}</td>
                   <td>{projeto.status}</td>
                   <td>{projeto.nome}</td> 
                 </tr>
                  )))}
              </tbody>
            </table>
          </PopUpTable>
        </Content>
        <div id="grid"> 
          <Grid/>
        </div>
        </div>
      </Container>
      }
    </>
)};

export default Login;
