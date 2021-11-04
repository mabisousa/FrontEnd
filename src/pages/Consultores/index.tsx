import React, { useState, useEffect, useCallback } from 'react';

import { Container, Filtros, Titulo, Formulario, Filtro } from './style';

import Table from "../../components/ConsultantTable"
import Dropdown from "../../components/Dropdown";
import Profile from "../../components/Profile";
import Header from "../../components/Header";
import Menu from "../../components/Menu";

import { i18n } from '../../translate/i18n';

import light from '../../styles/themes/light'
import dark from '../../styles/themes/dark'


const Consultor: React.FC = () => {
  const [pesquisa, setPesquisa] = useState('');
  const [status, setStatus] = useState('Todos');

  const [tema, setTema] = useState(light);

  const alternarTema = () => {
    setTema(tema.titulo === 'light' ? dark : light);
  };

  window.localStorage.getItem('Theme:darkMode')

  const handleFiltrarStatus = useCallback((status: string) => {
    setStatus(status);
    console.log(status)
  },[]);  
  
  return (
    <>  
      <Container>
      <Header alternarTema={alternarTema}>
          <p>
            {i18n.t('consultants.titleHeader')}
          </p>
        </Header>
        <Profile/>
        <Menu/>
        <Filtros>
          <Titulo>
            {i18n.t('consultants.titleHeader')}
          </Titulo>
          <Filtro>
            <Formulario>
              <label>
                {i18n.t('consultants.name')}
              </label>
              <input placeholder={i18n.t('consultants.placeHolder')} 
                value={pesquisa} onChange={(ev) => setPesquisa(ev.target.value)}/>
            </Formulario>
            <div>
              <label>
                {i18n.t('projects.status')}
              </label>
              <Dropdown>
                <span>
                  {status}
                </span>
                <div>
                  <button onClick={() => handleFiltrarStatus('Ativo')}>
                    {i18n.t('consultants.active')}
                  </button>
                  <button onClick={() => handleFiltrarStatus('Inativo')}>
                    {i18n.t('consultants.inactive')}
                  </button>
                  <button onClick={() => handleFiltrarStatus('Todos')}>
                    {i18n.t('projects.all')}
                  </button>
                </div>
              </Dropdown>
            </div>
          </Filtro>
        </Filtros>
        <Table status={status}/>
      </Container>
    </>
  )
};

export default Consultor;
