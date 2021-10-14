import React, { useState, useEffect, useCallback } from 'react';
import { Container, Filters, Title, Form, Filterbynumber, Filter } from './style';
import Profile from "../../components/Profile";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import api from "../../services/api";
import Dropdown from "../../components/Dropdown";
import Table from "../../components/ConsultantTable"
import { i18n } from '../../translate/i18n';

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
const Consultants: React.FC = () => {
  const [consultant, setConsultant] = useState<Consultor[]>([]);
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('Todos');

  useEffect(() => {
    api.get(`/consultores`).then((response) => {
      setConsultant(response.data);
    })
  }, [consultant, setConsultant]);

  const handleFilterStatus = useCallback((status: string) => {
    setStatus(status);
    console.log(status)
  },[]);  
  
  return (
    <>  
      <Header>
        <p>{i18n.t('consultants.titleHeader')}</p>
      </Header>
      <Profile/>
      <Menu/>
      <Container>
        <Filters>
          <Title>{i18n.t('consultants.titleHeader')}</Title>
          <Filter>
            <Form>
              <label>{i18n.t('consultants.name')}</label>
              <input placeholder="Digite aqui..." value={search} onChange={(ev) => setSearch(ev.target.value)}/>
            </Form>
            <Filterbynumber>
              <p>{i18n.t('consultants.registration')}</p>
              <input/><p> - </p><input/>
            </Filterbynumber>
            <div>
              <label>{i18n.t('consultants.status')}</label>
              <Dropdown>
              <span>{status}</span>
                <div>
                <button onClick={() => handleFilterStatus('Ativo')}>{i18n.t('consultants.active')}</button>
                <button onClick={() => handleFilterStatus('Inativo')}>{i18n.t('consultants.inactive')}</button>
                <button onClick={() => handleFilterStatus('Todos')}>{i18n.t('consultants.all')}</button>
                </div>
              </Dropdown>
            </div>
          </Filter>
        </Filters>
        <Menu/>
        <Table status={status}/>
      </Container>
    </>
  )
};

export default Consultants;
