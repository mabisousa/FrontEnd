import React, { useState, useEffect, useCallback } from 'react';
import { Filters, Title, Form, Filterbynumber, Filter } from './style';
import Profile from "../../components/Profile";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import api from "../../services/api";
import Dropdown from "../../components/Filter";
import Table from "../../components/TableConsultor"

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
  const [consult] = useState<Consultor>();
  const [search, setSearch] = useState('');

  const filter = consultores.filter((consultor) => consultor.nome.toLowerCase().includes(search.toLowerCase()))

  const handleShow = (showPop: boolean) => {
    setShowPopup(showPop);
  }

  /*const handleShow = useCallback((id: number, showPop: boolean) => {
    setShowPopup(showPop);
    
    setConsult(consultores[id-1]);

  },[]);*/

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
        <Table/>
      </main>
    </>
)};

export default Login;
