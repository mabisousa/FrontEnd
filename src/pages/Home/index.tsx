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
  const [filtrados, setFiltrados] = useState<Projetos[]>([]);
  const [show, setShow] = useState(false);
  const [secao, setSecao] = useState('Todos');
  const [status, setStatus] = useState('Todos');
  const [secoes, setSecoes] = useState<Secoes[]>([]);


  useEffect(() => {

    if(secao !== 'Todos') {
      api.get(`/projetos/secao/${secao}`).then((response) => {
        setProjeto(response.data)
      })
    } else {
      api.get("/projetos").then((response) => {
        setProjeto(response.data)
      })
    }
    api.get("/secoes").then((response) => {
      setSecoes(response.data)
    })

  }, [projetos, setProjeto, secao, status]);
  
  useEffect(() => {
    api.get("/projetos").then((response) => {
      setFiltrados(response.data)
    })
  }, []);
  const [search, setSearch] = useState('');

  const filtrarNome = useCallback((ev: string) => {
    setSearch(ev)
    setFiltrados(projetos.filter((projeto) => projeto.nome.toLowerCase().includes(search.toLowerCase())));

  },[projetos, setSearch, search]);  

  const filtrarStatus = useCallback((status: string) => {

    setStatus(status);
    setFiltrados(projetos.filter((projeto) => projeto.status === status));

  },[setProjeto, projetos, secao]);  
  
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
                    <input type="text" placeholder="Digite aqui... " value={search} onChange={(ev) => filtrarNome(ev.target.value)}/>
                </Form>
                <div>
                  <label className="secao">Seção:</label>
                  <Dropdown>
                  <span>{secao}</span>
                    <div>
                      {secoes.map((secao) => (
                        <button onClick={() => setSecao(secao.nomeSecao)} key={secao.nomeSecao}>{secao.nomeSecao}</button>
                      ))}
                      <button onClick={() => setSecao('Todos')}>Todos</button>
                    </div>
                  </Dropdown>
                </div>
                
                <div>
                  <label  className="status" >Status:</label>
                  <Dropdown>
                    <span>{status}</span>
                    <div>
                      <button onClick={() => filtrarStatus("ANDAMENTO")}>Andamento</button>
                      <button onClick={() => filtrarStatus("ATRASADO")}>Atrasado</button>
                      <button onClick={() => filtrarStatus("CONCLUÍDO")}>Concluído</button>
                      <button onClick={() => filtrarStatus("Todos")}>Todos</button>
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
        <Card id={projeto.id} key={projeto.id} show={show}/> 
      ))}
      </Cards>
    </>
                
  ) 
};

export default Home;