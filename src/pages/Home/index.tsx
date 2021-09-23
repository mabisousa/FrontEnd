import React, { useCallback, useEffect, useState } from 'react';
import { Title, Form, Filters, Filter, Container, Cards, TitlePopUp, InfosPopup, InfosGerais, Objetivo, Horas, HorasApontadas, Skills, Table, ConsultoresAlocados, DetailsPopup} from './style';
import Profile from "../../components/Profile";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import display1 from '../../imgs/display1.svg';
import display2 from '../../imgs/display2.svg';
import api from "../../services/api"
import Chart from 'react-google-charts';
import { BsX } from 'react-icons/bs';
import Grid from '../../components/Grid';
import Dropdown from "../../components/Filter";
import Card from "../../components/Cards"

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
interface Secoes {
    idSecao: number,
    nomeSecao: string
}
const Home: React.FC = () => {

  const [isOpen, setOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [projetos, setProjeto] = useState<Projetos[]>([]);
  const [projetossec, setProjetoSec] = useState<Projetos[]>([]);
  const [show, setShow] = useState(false);
  const [projetopopup, setPopup] = useState<Projetos>();
  const [secoes, setSecoes] = useState<Secoes[]>([]);

  useEffect(() => {
    api.get("/projetos").then((response) => {
      setProjeto(response.data)
    })
    api.get("/secoes").then((response) => {
      setSecoes(response.data)
    })
  }, [secoes, setSecoes]);

  const [search, setSearch] = useState('');
  const filter = projetos.filter((projeto) => projeto.nome.toLowerCase().includes(search.toLowerCase()));

  /*const filtrarSecao = useCallback((secao: string) => {

    api.get(`/projetos/secao/${secao}`).then((response) => {
      setProjetoSec(response.data)
    })
    console.log(projetossec);

  },[projetos, setProjeto]);*/

  const handleOpen = useCallback(() => {
      if(!!isOpen === false) {
        setOpen(true);    
      } else {
        setOpen(false);    
      }
    }, [isOpen, setOpen]);

  const openPopup = useCallback((id) => {
    setShowPopup(!showPopup);
    setPopup(projetos[id-1]);
  },[showPopup, setShowPopup, projetos, projetopopup, setPopup]);
  
  const handleShow = useCallback(() => {
    if(!!show === false) {
      setShow(true);    
    }
  }, [show, setShow]);

  const handleNotShow = useCallback(() => {
    if(!!show !== false) {
      setShow(false);    
    }
  }, [show, setShow]);

  let restantes = 0;
  let apontadas = 0;

  if (projetopopup) {
    apontadas = projetopopup?.horasApontadas;
    restantes = projetopopup?.horasTotal - apontadas;
  } 

  return (
    < >
      <Header>
        <p>PROJETOS</p>
      </Header>
      
      <Profile/>
      <Menu/>
      <Filters>
        <Title>
          PROJETOS ALOCADOS
        </Title>
        <div>
            <Filter>
                <Form>
                    <label>Projeto:</label>
                    <input type="text" placeholder="Digite aqui... " value={search} onChange={(ev) => setSearch(ev.target.value)}/>
                </Form>
                <p>Seção:</p>
                <Dropdown>
                  <div>
                    {/*secoes.map((secao) => (
                      <button onClick={() => filtrarSecao(secao.nomeSecao)} key={secao.nomeSecao}>{secao.nomeSecao}</button>
                    ))*/}
                    <p>Todos</p>
                  </div>
                </Dropdown>
                <p>Status:</p>
                <Dropdown>
                  <div>
                    <p>ABC</p>
                    <p>XYZ</p>
                    <p>DEF</p>
                    <p>Todos</p>
                  </div>
                </Dropdown>
            </Filter>
            <button onClick={handleNotShow}><img src={display1} alt=""/></button>
            <button onClick={handleShow}><img src={display2} alt=""/></button>
        </div> 
      </Filters>
      <Cards > 
      { filter.map((projeto) => (
        <Card id={projeto.id} /> 
      ))}
      </Cards>
    </>
                
  ) 
};

export default Home;