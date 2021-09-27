import React, { useEffect, useState } from 'react';
import { Card, TitleSection, TitleProject, HoldHours, Hours, Status, Date } from './style';
import api from "../../services/api";
import Popup from "../../components/PopupProjetos";

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

  const [showPopup, setShowPopup] = useState(false);
  const [projeto, setProjeto] = useState<Projetos>();

  useEffect(() => {
    api.get(`/projetos/${id}`).then((response) => {
      setProjeto(response.data)
    })
  }, [id]);

  const handleShow = (showPop: boolean) => {
    setShowPopup(showPop);
  }

  return (
    < >
      {projeto &&
        <Card Show={!!show} color={projeto.status} onClick={() => (setShowPopup(!showPopup))} key={projeto.id}>
          <TitleSection Show={!!show}>{projeto.secao.idSecao} - {projeto.secao.nomeSecao}</TitleSection>
          <TitleProject Show={!!show}>{projeto.id} - {projeto.nome} </TitleProject>
          <HoldHours Show={!!show}>
            <Hours Show={!!show}>
              <p>Total:</p>
              <p>{projeto.horasTotal}</p>
            </Hours>
            <Hours Show={!!show}>
              <p>Apontadas:</p>
              <p>{projeto.horasApontadas}</p>
            </Hours>
          </HoldHours>
          <Status Show={!!show}>
            <p>Situação: </p>
            <p>{projeto.status}</p>
          </Status>
          <Date Show={!!show}>
            <p>De: {projeto.dataInicio.substring(0,10)}</p>
            { projeto.dataFim ?
                <p>Até: {projeto.dataFim.substring(0,10)}</p>
            :
                <p>Até: 00-00-00</p>
            }
          </Date>
        </Card>
      }
      {showPopup && projeto &&
        <Popup id={projeto.id} showPopup={handleShow}/> 
      }
    </>                
  ) 
};

export default Cards;