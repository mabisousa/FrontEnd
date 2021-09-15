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
  id: number;
  nome: string;
  status: string
  projetos: [
    {
      id: number
    }
  ]
  }

const Login: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [consultores, setConsultor] = useState<Consultor[]>([]);
  const [consult, setConsult] = useState<Consultor>();
  const openPopup = useCallback((id: number) => {
    setShowPopup(!showPopup);
    
    setConsult(consultores[id]);
  },[consultores]);

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
                <button onClick={() => setShowPopup(!showPopup)} id="button"><td> + </td></button>
              </tr>
              
              </>
            ))}
          </tbody>
        </table>
        </Consultores>
      </main>
      
      {showPopup &&
        <Container show={!showPopup}>
        <div id="hold">
        <button onClick={() => setShowPopup(!showPopup)}><BsX/></button>
        <PopUpInfo>
          <header>
            <HiUserCircle/>
            <div id="EmployeeInformation">
                <p></p>
                <p>E-mail: isac_bezerra@empresa.com</p>
            </div>
          </header>
        </PopUpInfo>
        <Content>
          <Skills>
            <h5>SKILLS</h5>
            <HoldContent>
                <p>UI / UX</p>
                <p>Desing Responsivo</p>
                <p>CSS e JavaScript Frameworks</p>
                <p>ReactJS</p>
                <p>Bootstrap</p>
                <p>Debug</p>
                <p>Git</p>
                <p>Git</p>
                <p>Git</p>
                <p>Git</p>
                <p>Git</p>
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
                <tr>
                  <td>0000000</td>
                  <td>Concluido</td>
                  <td>Restauração de alteradores</td> 
                </tr>
                <tr>
                  <td>0000000</td>
                  <td>Concluido</td>
                  <td>Restauração de alteradores</td> 
                </tr>
                <tr>
                  <td>0000000</td>
                  <td>Concluido</td>
                  <td>Restauração de alteradores</td> 
                </tr>
                <tr>
                  <td>0000000</td>
                  <td>Concluido</td>
                  <td>Restauração de alteradores</td> 
                </tr>
                <tr>
                  <td>0000000</td>
                  <td>Concluido</td>
                  <td>Restauração de alteradores</td> 
                </tr>
                <tr>
                  <td>0000000</td>
                  <td>Concluido</td>
                  <td>Restauração de alteradores</td> 
                </tr>
                <tr>
                  <td>0000000</td>
                  <td>Concluido</td>
                  <td>Restauração de alteradores</td> 
                </tr>
                <tr>
                  <td>0000000</td>
                  <td>Concluido</td>
                  <td>Restauração de alteradores</td> 
                </tr>
                <tr>
                  <td>0000000</td>
                  <td>Concluido</td>
                  <td>Restauração de alteradores</td> 
                </tr>
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
