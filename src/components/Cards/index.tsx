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

  const [showPopup, setShowPopup] = useState(false);
  const [project, setProject] = useState<Projetos>();

  useEffect(() => {
    api.get(`/projetos/${id}`).then((response) => {
      setProject(response.data)
    })
  }, [id]);

  const handleshowPopup = (showPop: boolean) => {
    setShowPopup(showPop);
  }

  return (
    <>
      { project &&
        <Container show={!!show} color={project.status} onClick={() => (setShowPopup(!showPopup))} key={project.id}>
          <TitleSection show={!!show}>{project.secao.idSecao} - {project.secao.nomeSecao}</TitleSection>
          <TitleProject show={!!show}>{project.id} - {project.nome} </TitleProject>
          <HoldHours show={!!show}>
            <Hours show={!!show}>
              <p>Total:</p>
              <p>{project.horasTotal}</p>
            </Hours>
            <Hours show={!!show}>
              <p>Apontadas:</p>
              <p>{project.horasApontadas}</p>
            </Hours>
          </HoldHours>
          <Status show={!!show}>
            <p>Situação: </p>
            <p>{project.status}</p>
          </Status>
          <Date show={!!show}>
            <p>De: {project.dataInicio.substring(0,10)}</p>
            { project.dataFim ?
              <p>Até: {project.dataFim.substring(0,10)}</p>
            :
              <p>Até: 00-00-00</p>
            }
          </Date>
        </Container>
      }
      { showPopup && project &&
        <Popup id={project.id} showPopup={handleshowPopup}/> 
      }
    </>                
  ) 
};

export default Cards;