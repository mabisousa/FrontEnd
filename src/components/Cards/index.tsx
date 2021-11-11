import React, { useEffect, useState } from 'react';

import { Container, TituloSecao, TituloProjeto, SeguraHoras, Hora, Status, Data } from './style';

import api from "../../services/api";
import Popup from "../PopupProjetos";

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
  const [projeto, setProjeto] = useState<Projetos>();

  useEffect(() => {
    api.get(`/projetos/${id}`).then((response) => {
      setProjeto(response.data)
    })
  }, [id]);

  const handleMostrarPopup = (showPop: boolean) => {
    setMostrarPopup(showPop);
  }

  return (
    <>
      { projeto &&
        <Container mostrar={!!mostrar} cor={projeto.projetoStatus} 
          onClick={() => (setMostrarPopup(!mostrarPopup))} key={projeto.id}>
          <TituloSecao mostrar={!!mostrar}>
            {projeto.secao.idSecao} - {projeto.secao.secaoNome}
          </TituloSecao>
          <TituloProjeto mostrar={!!mostrar}>
            {projeto.id} - {projeto.projetoNome} 
          </TituloProjeto>
          <SeguraHoras mostrar={!!mostrar}>
            <Hora mostrar={!!mostrar}>
              <p>
                {i18n.t('card.total')}
              </p>
              <p>
                {projeto.projetoHorasTotais}
              </p>
            </Hora>
            <Hora mostrar={!!mostrar}>
              <p>
                {i18n.t('card.apontadas')}
              </p>
              <p>
                {projeto.projetoHorasTrabalhadas}
              </p>
            </Hora>
          </SeguraHoras>
          <Status mostrar={!!mostrar}>
            <p>
              {i18n.t('card.status')}
            </p>
            <p>
              {projeto.projetoStatus}
            </p>
          </Status>
          <Data mostrar={!!mostrar}>
            <p>
              {i18n.t('card.de')} {projeto.projetoDateInicio}
            </p>
            { projeto.projetoDateFim ?
              <p>
                {i18n.t('card.ate')} {projeto.projetoDateFim}
              </p>
            :
              <p>
                {i18n.t('card.ate')} 00-00-00
              </p>
            }
          </Data>
        </Container>
      }
      { mostrarPopup && projeto &&
        <Popup id={projeto.id} mostrarPopup={handleMostrarPopup}/> 
      }
    </>                
  ) 
};

export default Cards;