import React, { useState, useEffect, useCallback } from 'react';

import { Container, Filters, Title, Form, Filterbynumber, Filter } from './style';

import Table from "../../components/ConsultantTable"
import Dropdown from "../../components/Dropdown";
import Profile from "../../components/Profile";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import api from "../../services/api";

import { i18n } from '../../translate/i18n';

import light from '../../styles/themes/light'
import dark from '../../styles/themes/dark'

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
  const [darkMode] = useState(false);

  const [theme, setTheme] = useState(light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  window.localStorage.getItem('Theme:darkMode')

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
      <Header toggleTheme={toggleTheme}>
        <p>
          {i18n.t('consultants.titleHeader')}
        </p>
      </Header>
      <Profile/>
      <Menu/>
      <Container darkMode={darkMode}>
        <Filters darkMode={darkMode}>
          <Title darkMode={darkMode}>
            {i18n.t('consultants.titleHeader')}
          </Title>
          <Filter darkMode={darkMode}>
            <Form>
              <label>
                {i18n.t('consultants.name')}
              </label>
              <input placeholder={i18n.t('consultants.placeHolder')} 
                value={search} onChange={(ev) => setSearch(ev.target.value)}/>
            </Form>
            <Filterbynumber>
              <p>
                {i18n.t('consultants.registration')}
              </p>
              <input/>
              <p> 
                - 
              </p>
              <input/>
            </Filterbynumber>
            <div>
              <label>
                {i18n.t('projects.status')}
              </label>
              <Dropdown>
                <span>
                  {status}
                </span>
                <div>
                  <button onClick={() => handleFilterStatus('Ativo')}>
                    {i18n.t('consultants.active')}
                  </button>
                  <button onClick={() => handleFilterStatus('Inativo')}>
                    {i18n.t('consultants.inactive')}
                  </button>
                  <button onClick={() => handleFilterStatus('Todos')}>
                    {i18n.t('projects.all')}
                  </button>
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
