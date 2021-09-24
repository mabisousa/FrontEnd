import React, { useCallback, useEffect, useState } from 'react';
import { Title, Form, Filters, Filter, Cards } from './style';
import Profile from "../../components/Profile";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import display1 from '../../imgs/display1.svg';
import display2 from '../../imgs/display2.svg';
import api from "../../services/api"
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

  const [projetos, setProjeto] = useState<Projetos[]>([]);
  const [show, setShow] = useState(false);
  const [filtro, setFiltro] = useState('');
  const [secoes, setSecoes] = useState<Secoes[]>([]);

  useEffect(() => {

    api.get("/projetos").then((response) => {
      setProjeto(response.data)
    })

    api.get("/secoes").then((response) => {
      setSecoes(response.data)
    })
  console.log(projetos)
    return;

  }, [projetos, setProjeto]);

  const filtrarSecao = useCallback((secao: string) => {

    
    api.get(`/projetos/secao/${secao}`).then((response) => {
      console.log(response.data)
      setProjeto(projetos.map(projeto => ))
    })

  },[setProjeto]);
  
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

  
  const [search, setSearch] = useState('');
  const filtrados = projetos.filter((projeto) => projeto.nome.toLowerCase().includes(search.toLowerCase()));

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
                <div>
                  <label>Seção:</label>
                  <Dropdown>
                    <div>
                      {secoes.map((secao) => (
                        <button onClick={() => filtrarSecao(secao.nomeSecao)} key={secao.nomeSecao}>{secao.nomeSecao}</button>
                      ))}
                      <button>Todos</button>
                    </div>
                  </Dropdown>
                </div>
                
                <div>
                  <label>Status:</label>
                  <Dropdown>
                    <div>
                      <button>Andamento</button>
                      <button>Atrasado</button>
                      <button>Concluído</button>
                      <button>Todos</button>
                    </div>
                  </Dropdown>
                </div>
            </Filter>
            <button onClick={handleNotShow}><img src={display1} alt=""/></button>
            <button onClick={handleShow}><img src={display2} alt=""/></button>
        </div> 
      </Filters>
      <Cards > 
      { filtrados.map((projeto) => (
        <Card id={projeto.id} key={projeto.id} /> 
      ))}
      </Cards>
    </>
                
  ) 
};

export default Home;