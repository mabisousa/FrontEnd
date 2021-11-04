import React, { useEffect, useState } from 'react';

import { Container, TitleSection, TitleProject, HoldHours, Hours, Status, Date } from './style';

import api from "../../services/api";
import Popup from "../ProjectsPopup";

import { i18n } from '../../translate/i18n';

interface Projetos {
  id: number,
  secao: {
    idSecao: number,
    secaoNome: string,
  },
  projetoNome: string,
  projetoDescricao: string,
  projetoStatus: string,
  projetoDateInicio: Date,
  projetoDateFim: Date,
  projetoHorasTotais: number,
  projetoHorasTrabalhadas: number,
  projetoConsultores: [
    {
      id: number,
      consultorNome: string,
      consultorStatus: string
    }
  ],
  projetoSkills: [
    {
      skillNome: string,
      horasTotais: number,
      horasTrabalhadas: number
    }
  ]
}

interface Projeto {
  id: number,
  mostrar: boolean
}

const Cards: React.FC<Projeto> = ({id, mostrar}) => {

  const [mostrarPopup, setMostrarPopup] = useState(false);
  const [projeto, setProject] = useState<Projetos>();

  useEffect(() => {
    api.get(`/projetos/${id}`).then((response) => {
      setProject(response.data)
    })
  }, [id]);

  const handleMostrarPopup = (showPop: boolean) => {
    setMostrarPopup(showPop);
  }

  return (
    <>
      { projeto &&
        <Container show={!!mostrar} color={projeto.projetoStatus} 
          onClick={() => (setMostrarPopup(!mostrarPopup))} key={projeto.id}>
          <TitleSection show={!!mostrar}>
            {projeto.secao.idSecao} - {projeto.secao.secaoNome}
          </TitleSection>
          <TitleProject show={!!mostrar}>
            {projeto.id} - {projeto.projetoNome} 
          </TitleProject>
          <HoldHours show={!!mostrar}>
            <Hours show={!!mostrar}>
              <p>
                {i18n.t('card.total')}
              </p>
              <p>
                {projeto.projetoHorasTotais}
              </p>
            </Hours>
            <Hours show={!!mostrar}>
              <p>
                {i18n.t('card.pointed')}
              </p>
              <p>
                {projeto.projetoHorasTrabalhadas}
              </p>
            </Hours>
          </HoldHours>
          <Status show={!!mostrar}>
            <p>
              {i18n.t('card.status')}
            </p>
            <p>
              {projeto.projetoStatus}
            </p>
          </Status>
          <Date show={!!mostrar}>
            <p>
              {i18n.t('card.from')} {projeto.projetoDateInicio}
            </p>
            { projeto.projetoDateFim ?
              <p>
                {i18n.t('card.to')} {projeto.projetoDateFim}
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
        <Popup id={projeto.id} mostrarPopup={handleMostrarPopup}/> 
      }
    </>                
  ) 
};

export default Cards;