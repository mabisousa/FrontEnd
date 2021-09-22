import React, { useCallback, useEffect, useState } from 'react';
import { Container, Card, TitleSection, TitleProject, HoldHours, Hours, Status, Date} from './style';
import api from "../../services/api"

interface Projetos{
  id: number,
  secao: {
    idSecao: number,
    nomeSecao: string
  },
  nome: string,
  status: string,
  dataInicio: string,
  dataFim: string,
  horasApontadas: number,
  horasTotal: number,
}

const Cards: React.FC = () => {

  const [isOpen, setOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [projetos, setProjeto] = useState<Projetos[]>([]);
  const [show, setShow] = useState(false);
  const [projetopopup, setPopup] = useState<Projetos>();

  useEffect(() => {
    api.get("/projetos").then((response) => {
      setProjeto(response.data)
    })
  }, []);
  const [search, setSearch] = useState('');

  const filter = projetos.filter((projeto) => projeto.nome.toLowerCase().includes(search.toLowerCase()));

  const openPopup = useCallback((id) => {
    setShowPopup(!showPopup);
    setPopup(projetos[id-1]);
  },[showPopup, setShowPopup, projetos, projetopopup, setPopup]);

  return (
    < >
      <Container > 
      {filter.map((projeto) => (
        <Card Show={!!show} color={projeto.status} onClick={() => openPopup(projeto.id)} key={projeto.id}>
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
      ))}
      </Container>
    </>                
  ) 
};

export default Cards;