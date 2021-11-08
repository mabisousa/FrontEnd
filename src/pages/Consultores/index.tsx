import React, { useState, useCallback } from 'react';

import { Container, Filtros, Titulo, Formulario, Filtro } from './style';

import Table from "../../components/ConsultantTable"
import Dropdown from "../../components/Dropdown";
import Profile from "../../components/Profile";
import Header from "../../components/Header";
import Menu from "../../components/Menu";

import { i18n } from '../../translate/i18n';

interface tema{
  alternarTema(): void
}

const Consultor: React.FC<tema> = ({alternarTema}) => {
  const [pesquisa, setPesquisa] = useState('');
  const [status, setStatus] = useState('Todos');

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
            {i18n.t('consultores.titulo')}
          </p>
        </Header>
        <Profile/>
        <Menu/>
        <Filtros>
          <Titulo>
            {i18n.t('consultores.titulo')}
          </Titulo>
          <Filtro>
            <Formulario>
              <label>
                {i18n.t('consultores.nome')}
              </label>
              <input placeholder={i18n.t('consultores.placeHolder')} 
                value={pesquisa} onChange={(ev) => setPesquisa(ev.target.value)}/>
            </Formulario>
            <div>
              <label>
                {i18n.t('projetos.status')}
              </label>
              <Dropdown>
                <span>
                  {status}
                </span>
                <div>
                  <button onClick={() => handleFiltrarStatus('Ativo')}>
                    {i18n.t('consultores.ativo')}
                  </button>
                  <button onClick={() => handleFiltrarStatus('Inativo')}>
                    {i18n.t('consultores.inativo')}
                  </button>
                  <button onClick={() => handleFiltrarStatus('Todos')}>
                    {i18n.t('projetos.todos')}
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
