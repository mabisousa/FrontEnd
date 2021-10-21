import React, { useEffect, useState } from 'react';

import { Container, TitleSection, TitleProject, HoldHours, Hours, Status, Date } from './style';

import api from "../../services/api";
import Popup from "../ProjectsPopup";

import { i18n } from '../../translate/i18n';

interface Projetos{
  id: number,
  secao: {
    idSecao: number,
    nomeSecao: string
  },
  nome: string,
  descricao: string,
  consultores: [
    {
    id: number,
    nome: string
    }
  ],
  status: string,
  dataInicio: string,
  dataFim: string,
  horasApontadas: number,
  horasTotal: number,
  /*apontamentos: [{
    id: number,
    alocacao: {
      skill:string,
    },
    horasTrabalhadas: number,
    situacaoApontamento: string,
  }]*/
  skills: [
    {
      id: number,
      nome: string,
      horasApontadas: number,
      horasTotal: number,
    }
  ]
}

interface Projeto {
  id: number,
  mostrar: boolean
}

const Cards: React.FC<Projeto> = ({id, mostrar}) => {

  const [mostrarPopup, setmostarPopup] = useState(false);
  const [projeto, setProject] = useState<Projetos>();
  const [modoEscuro] = useState(false);

  window.localStorage.getItem('Theme:darkMode')

  useEffect(() => {
    api.get(`/projetos/${id}`).then((response) => {
      setProject(response.data)
    })
  }, [id]);

  const handleMostarPopup = (showPop: boolean) => {
    setmostarPopup(showPop);
  }

  return (
    <>
      { projeto &&
        <Container show={!!mostrar} color={projeto.status} 
          onClick={() => (setmostarPopup(!mostrarPopup))} key={projeto.id} darkMode={modoEscuro}>
          <TitleSection show={!!mostrar} darkMode={modoEscuro}>
            {projeto.secao.idSecao} - {projeto.secao.nomeSecao}
          </TitleSection>
          <TitleProject show={!!mostrar} darkMode={modoEscuro}>
            {projeto.id} - {projeto.nome} 
          </TitleProject>
          <HoldHours show={!!mostrar} darkMode={modoEscuro}>
            <Hours show={!!mostrar}>
              <p>
                {i18n.t('card.total')}
              </p>
              <p>
                {projeto.horasTotal}
              </p>
            </Hours>
            <Hours show={!!mostrar}>
              <p>
                {i18n.t('card.pointed')}
              </p>
              <p>
                {projeto.horasApontadas}
              </p>
            </Hours>
          </HoldHours>
          <Status show={!!mostrar} darkMode={modoEscuro}>
            <p>
              {i18n.t('card.status')}
            </p>
            <p>
              {projeto.status}
            </p>
          </Status>
          <Date show={!!mostrar} darkMode={modoEscuro}>
            <p>
              {i18n.t('card.from')} {projeto.dataInicio.substring(0,10)}
            </p>
            { projeto.dataFim ?
              <p>
                {i18n.t('card.to')} {projeto.dataFim.substring(0,10)}
              </p>
            :
              <p>
                {i18n.t('card.to')} 00-00-00
              </p>
            }
          </Date>
        </Container>
      }
      { mostrarPopup && projeto &&
        <Popup id={projeto.id} mostrarPopup={handleMostarPopup}/> 
      }
    </>                
  ) 
};

export default Cards;