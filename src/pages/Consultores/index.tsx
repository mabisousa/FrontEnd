import React from 'react';

import { Filters, Title, Form, Table,  } from './style';

import Profile from "../../components/Profile";
import Header from "../../components/Header";
import Menu from "../../components/Menu";

import { HiUserCircle, HiX } from 'react-icons/hi';
import { BsX } from 'react-icons/bs'
import { Container, PopUp, PopUpInfo, Content, Skills, HoldContent, PopUpTable } from "./style";
import Grid from "../../components/Grid"

import { modal } from './script.js';

const Login: React.FC = () => {

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
        <div>
          <div id="filter">
            <Form>
              <label>Nome:</label>
              <input placeholder="Digite aqui..." />
            </Form>
          </div>
        </div> 
      </div>
    </Filters>

    <Menu/>
    
    <Table>
      <tr>
        <td>CADASTRO</td>
        <td>NOME</td>
        <td>STATUS</td>
        <td>PROJETOS</td>
        <td>DETALHES</td>
      </tr>
      <tr>
        <td>67270</td>
        <td>ISAC FREIRE BEZERRA</td>
        <td>ATIVO</td> 
        <td>2</td>
        <button onClick={modal} id="button"><td> + </td></button>
      </tr>
      <tr>
        <td>67271</td>
        <td>JEAN HENRIQUE REIGUEL</td>
        <td>ATIVO</td> 
        <td>2</td>
        <button data-modal-target="#container" id="button"><td> + </td></button>
      </tr>
      <tr>
        <td>67272</td>
        <td>KETLHIN KATIA NARDELLI</td>
        <td>INATIVO</td> 
        <td>2</td>
        <button data-modal-target="#container" id="button"><td> + </td></button>
      </tr>
      <tr>
        <td>67273</td>
        <td>MARCOS ANTÔNIO BOLIGON VARGAS</td>
        <td>INATIVO</td> 
        <td>2</td>
        <button data-modal-target="#container" id="button"><td> + </td></button>
      </tr> 
      <tr>
        <td>67274</td>
        <td>MARIA GABRIELA DE SOUSA CRUZ</td>
        <td>ATIVO</td> 
        <td>2</td>
        <button data-modal-target="#container" id="button"><td> + </td></button>
      </tr>
      <tr>            
        <td>67275</td>
        <td>MILENE APARECIDA LIMA</td>
        <td>ATIVO</td> 
        <td>2</td>
        <button data-modal-target="#container" id="button"><td> + </td></button>
      </tr>
    </Table>
  </main>
  <Container>
      <div className="container">
      <PopUp>
      <button className="close-button"><BsX/></button>
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
      </PopUp>
      </div>
      <div id="overlay"></div>
    </Container>
    </>
)};

export default Login;