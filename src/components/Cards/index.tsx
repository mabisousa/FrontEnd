import React, { useEffect, useState } from 'react';

import { Container, TituloSecao, TituloProjeto, SeguraHoras, Hora, Status, Data } from './style';

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

  const [mostrarPopup, setMostarPopup] = useState(false);
  const [projeto, setProjeto] = useState<Projetos>();

  useEffect(() => {
    api.get(`/projetos/${id}`).then((response) => {
      setProjeto(response.data)
    })
  }, [id]);

  const handleMostarPopup = (mostrarPop: boolean) => {
    setMostarPopup(mostrarPop);
  }

  return (
    <>
      { projeto &&
        <Container mostrar={!!mostrar} cor={projeto.status} 
          onClick={() => (setMostarPopup(!mostrarPopup))} key={projeto.id}>
          <TituloSecao mostrar={!!mostrar}>
            {projeto.secao.idSecao} - {projeto.secao.nomeSecao}
          </TituloSecao>
          <TituloProjeto mostrar={!!mostrar}>
            {projeto.id} - {projeto.nome} 
          </TituloProjeto>
          <SeguraHoras mostrar={!!mostrar}>
            <Hora mostrar={!!mostrar}>
              <p>
                {i18n.t('card.total')}
              </p>
              <p>
                {projeto.horasTotal}
              </p>
            </Hora>
            <Hora mostrar={!!mostrar}>
              <p>
                {i18n.t('card.pointed')}
              </p>
              <p>
                {projeto.horasApontadas}
              </p>
            </Hora>
          </SeguraHoras>
          <Status mostrar={!!mostrar}>
            <p>
              {i18n.t('card.status')}
            </p>
            <p>
              {projeto.status}
            </p>
          </Status>
          <Data mostrar={!!mostrar}>
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
          </Data>
        </Container>
      }
      { mostrarPopup && projeto &&
        <Popup id={projeto.id} mostrarPopup={handleMostarPopup}/> 
      }
    </>                
  ) 
};

export default Cards;