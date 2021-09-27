import React, { useState, useEffect, useCallback } from 'react';
import { Filters, Title, Form, Consultores, Container, PopUpInfo, Content, Skills, HoldContent, 
  PopUpTable, Filterbynumber, Tr, Filter } from './style';
import Profile from "../../components/Profile";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import api from "../../services/api";
import { HiUserCircle } from "react-icons/hi";
import { BsX } from "react-icons/bs";
import Grid from "../../components/Grid";
import Dropdown from "../../components/Filter";

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
      skill: {
        nome: string,
      },
      }
    ]
}
const Login: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [consultores, setConsultor] = useState<Consultor[]>([]);
  const [filtro, setFiltro] = useState('Todos');
  const [consult, setConsult] = useState<Consultor>();
  const [search, setSearch] = useState('');

  const filter = consultores.filter((consultor) => consultor.nome.toLowerCase().includes(search.toLowerCase()))

  const openPopup = useCallback((id: number) => {
    setShowPopup(!showPopup);
    
    setConsult(consultores[id-1]);

  },[consultores, consult, setConsult, setShowPopup, showPopup]);

  useEffect(() => {
    if(filtro === 'Todos') {
      api.get("/consultores").then((response) => {
        setConsultor(response.data);
      })
    }
  }, [consultores, setConsultor, filtro]);

  const filtrarStatus = useCallback((status: string) => {
    setFiltro(status)

    api.get(`/consultores/status/${status}`).then((response) => {
      setConsultor(response.data)
    })
  },[setConsultor]);
  
  return (
    <>  
      <Header>
        <p>CONSULTORES</p>
      </Header>
      <Profile/>
      <Menu/>
      <main>
        <Filters>
          <Title>CONSULTORES</Title>
          <Filter>
              <Form>
                <label>Nome:</label>
                <input placeholder="Digite aqui..." value={search} onChange={(ev) => setSearch(ev.target.value)}/>
              </Form>
              <Filterbynumber>
                <p>Cadastro:</p>
                <input/><p> - </p><input/>
              </Filterbynumber>
              <div>
                  <label>Status:</label>
                  <Dropdown>
                  <span>{filtro}</span>
                    <div>
                    <button onClick={() => filtrarStatus('Ativo')} key={'Ativo'}>{'Ativo'}</button>
                    <button onClick={() => filtrarStatus('Inativo')} key={'Inativo'}>{'Inativo'}</button>
                    <button onClick={() => setFiltro('Todos')}>Todos</button>
                    </div>
                  </Dropdown>
                </div>
          </Filter>
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
            {filter.map((consultor) => (
              <Tr color={consultor.status}>
                <td>{consultor.id}</td>
                <td>{consultor.nome}</td>
                <td>{consultor.status}</td> 
                <td>{consultor.projetos.length}</td>
                <button onClick={() => openPopup(consultor.id)} id="button"><td> + </td></button>
              </Tr>
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
                {consult.alocacoes.map((alocacao => (
                  alocacao.skill.nome
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
