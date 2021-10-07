import React, { useState, useEffect, useCallback } from 'react';
import { Container, Filters, Title, Form, Filterbynumber, Filter } from './style';
import Profile from "../../components/Profile";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import api from "../../services/api";
import Dropdown from "../../components/Filter";
import Table from "../../components/ConsultantTable"

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
  const [consultant, setConsultant] = useState<Consultor[]>([]);
  const [filter, setFilter] = useState('Todos');
  const [search, setSearch] = useState('');

  //const handleFilter = consultores.filter((consultor) => consultor.nome.toLowerCase().includes(search.toLowerCase()))

  useEffect(() => {
    if(filter === 'Todos') {
      api.get("/consultores").then((response) => {
        setConsultant(response.data);
      })
    }
  }, [consultant, setConsultant, filter]);

  const handleFilterStatus = useCallback((status: string) => {
    setFilter(status)

    api.get(`/consultores/status/${status}`).then((response) => {
      setConsultant(response.data)
    })
  },[setConsultant]);
  
  return (
    <>  
      <Header>
        <p>CONSULTORES</p>
      </Header>
      <Profile/>
      <Menu/>
      <Container>
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
                  <span>{filter}</span>
                    <div>
                    <button onClick={() => handleFilterStatus('Ativo')} key={'Ativo'}>{'Ativo'}</button>
                    <button onClick={() => handleFilterStatus('Inativo')} key={'Inativo'}>{'Inativo'}</button>
                    <button onClick={() => setFilter('Todos')}>Todos</button>
                    </div>
                  </Dropdown>
                </div>
          </Filter>
        </Filters>
        <Menu/>
        <Table/>
      </Container>
    </>
)};

export default Login;
