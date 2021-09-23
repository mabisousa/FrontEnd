import React, { useCallback, useEffect, useState } from 'react';
import { Card, TitleSection, TitleProject, HoldHours, Hours, Status, Date } from './style';
import { TitlePopUp, InfosPopup, InfosGerais, Objetivo, Horas, HorasApontadas, Skills, Table, ConsultoresAlocados, DetailsPopup } from "../../pages/Home/style"
import api from "../../services/api"
import Chart from 'react-google-charts';
import { BsX } from 'react-icons/bs';
import Grid from '../../components/Grid';
import Popup from "../../components/PopupProjetos"
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
}
const Cards: React.FC<Projeto> = ({id}) => {

  const [isOpen, setOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [projeto, setProjeto] = useState<Projetos>();
  const [show, setShow] = useState(false);

  useEffect(() => {
    api.get(`/projetos/${id}`).then((response) => {
      setProjeto(response.data)
    })
  }, []);
  const [search, setSearch] = useState('');



  const handleOpen = useCallback(() => {
    if(!!isOpen === false) {
      setOpen(true);    
    } else {
      setOpen(false);    
    }
  }, [isOpen, setOpen]);

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
        <Popup id={projeto.id} /> 
      }
    </>                
  ) 
};

export default Cards;