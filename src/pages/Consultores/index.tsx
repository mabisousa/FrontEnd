import React, { useState, useCallback } from 'react';

import { Container, Filtros, Titulo, Formulario, Filtro } from './style';

import TabelaConsultor from "../../components/TabelaConsultor"
import Dropdown from "../../components/Dropdown";
import Perfil from "../../components/Perfil";
import Cabecalho from "../../components/Cabecalho";
import Menu from "../../components/Menu";

import { i18n } from '../../translate/i18n';

interface tema{
  alternarTema(): void
}

const Consultor: React.FC<tema> = ({alternarTema}) => {
  const [pesquisa, setPesquisa] = useState('');
  const [status, setStatus] = useState('Todos');

  const handleFiltrarStatus = useCallback((status: string) => {
    setStatus(status);
    console.log(status)
  },[]);  
  
  return (
    <>  
      <Container>
        <Cabecalho alternarTema={alternarTema}>
          <p>
            {i18n.t('consultores.titulo')}
          </p>
        </Cabecalho>
        <Perfil/>
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
        <TabelaConsultor status={status}/>
      </Container>
    </>
  )
};

export default Consultor;
