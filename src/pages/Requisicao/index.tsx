import React, { useState } from 'react';

import { Container, Filtros, Titulo, Formulario, Filtro } from './style';

import Menu from "../../components/Menu";
import Perfil from "../../components/Perfil";
import Cabecalho from "../../components/Cabecalho";
import TabelaRequisicao from "../../components/TabelaRequisicao";

import { i18n } from '../../translate/i18n';

interface tema{
  alternarTema(): void
}

const Requisicao: React.FC<tema> = ({alternarTema}) => {
  const [pesquisa, setPesquisa] = useState('');
  
  return (
    <>  
      <Container>
        <Cabecalho alternarTema={alternarTema}>
          <p>
            {i18n.t('requisicoes.tituloPag')}
          </p>
        </Cabecalho>
        <Perfil/>
        <Menu/>
        <Filtros>
          <Titulo>
            {i18n.t('requisicoes.titulo')}
          </Titulo>
          <Filtro>
            <Formulario>
              <label>
                {i18n.t('consultores.nome')}
              </label>
              <input placeholder={i18n.t('consultores.placeHolder')} 
                value={pesquisa} onChange={(ev) => setPesquisa(ev.target.value)}/>
            </Formulario>
          </Filtro>
        </Filtros>
        <TabelaRequisicao/>
      </Container>
    </>
  )
};

export default Requisicao;
