import React, { useState, useEffect } from 'react';
import { Filters, Title, Form, Consultores } from './style';
import Profile from "../../components/Profile";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import { HiUserCircle } from 'react-icons/hi';
import { BsX } from 'react-icons/bs'
import { Container, PopUpInfo, Content, Skills, HoldContent, PopUpTable } from "./style";
import Grid from "../../components/Grid"
import api from "../../services/api";

interface Consultor{
  id: number;
  nome: string;
  status: string
  skill: string;
}

const Login: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [consultores, setConsultor] = useState<Consultor[]>([]);

  useEffect(() => {
    api.get("/consultores").then((response) => {
      setConsultor(response.data)
    })
  }, []);
  
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
              <tr>
                <td>{consultor.id}</td>
                <td>{consultor.nome}</td>
                <td>{consultor.status}</td> 
                <td>2</td>
                <button onClick={() => setShowPopup(!showPopup)} id="button"><td> + </td></button>
              </tr>
            ))}
          </tbody>
        </table>
        </Consultores>
      </main>
      {showPopup && 
        <Container show={!!showPopup}>
          <div id="hold">
          <button onClick={() => setShowPopup(!showPopup)}><BsX/></button>
          <PopUpInfo>
            <header>
              <HiUserCircle/>
              <div id="EmployeeInformation">
                  <h1>ISAC FREIRE BEZERRA - 67270</h1>
                  <p>Desenvolvedor WEB</p>
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
          <Grid/>
          </div>
        </Container>
      }
      
    </>
)};

export default Login;
