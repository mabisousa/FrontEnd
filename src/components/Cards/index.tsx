import React, { useEffect, useState } from 'react';
import { Container, TitleSection, TitleProject, HoldHours, Hours, Status, Date } from './style';
import api from "../../services/api";
import Popup from "../ProjectsPopup";

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
  show: boolean
}

const Cards: React.FC<Projeto> = ({id, show}) => {

  const [showPopup, setshowPopup] = useState(false);
  const [projeto, setProjeto] = useState<Projetos>();

  useEffect(() => {
    api.get(`/projetos/${id}`).then((response) => {
      setProjeto(response.data)
    })
  }, [id]);

  const handleshowPopup = (showPop: boolean) => {
    setshowPopup(showPop);
  }

  return (
    < >
      {projeto &&
        <Container show={!!show} color={projeto.status} onClick={() => (setshowPopup(!showPopup))} key={projeto.id}>
          <TitleSection show={!!show}>{projeto.secao.idSecao} - {projeto.secao.nomeSecao}</TitleSection>
          <TitleProject show={!!show}>{projeto.id} - {projeto.nome} </TitleProject>
          <HoldHours show={!!show}>
            <Hours show={!!show}>
              <p>Total:</p>
              <p>{projeto.horasTotal}</p>
            </Hours>
            <Hours show={!!show}>
              <p>Apontadas:</p>
              <p>{projeto.horasApontadas}</p>
            </Hours>
          </HoldHours>
          <Status show={!!show}>
            <p>Situação: </p>
            <p>{projeto.status}</p>
          </Status>
          <Date show={!!show}>
            <p>De: {projeto.dataInicio.substring(0,10)}</p>
            { projeto.dataFim ?
                <p>Até: {projeto.dataFim.substring(0,10)}</p>
            :
                <p>Até: 00-00-00</p>
            }
          </Date>
        </Container>
      }
      {showPopup && projeto &&
        <Popup id={projeto.id} showPopup={handleshowPopup}/> 
      }
    </>                
  ) 
};

export default Cards;