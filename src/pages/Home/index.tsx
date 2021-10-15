import React, { useCallback, useEffect, useState } from 'react';
import { Title, Container, Filter, Cards } from './style';
import Profile from "../../components/Profile";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import display1 from '../../assets/listView.svg';
import display2 from '../../assets/gridView.svg';
import api from "../../services/api";
import Dropdown from "../../components/Dropdown";
import Card from "../../components/Cards";
import { i18n } from "../../translate/i18n";

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

  const [projects, setProjects] = useState<Projetos[]>([]);
  const [filtered, setFiltereds] = useState<Projetos[]>([]);
  const [show, setShow] = useState(false);
  const [section, setSection] = useState('Todos');
  const [status, setStatus] = useState('Todos');
  const [sections, setSections] = useState<Secoes[]>([]);
  const [search, setSearch] = useState('');
  const [darkMode, setDarkMode] = useState(() => {
    const storageTheme = localStorage.getItem(
      'Theme:darkMode',
    );
    if(storageTheme){
      return JSON.parse(storageTheme)
    }
    return [];
    });
    useEffect(() => {
      localStorage.setItem(
        'Theme:darkMode',
        JSON.stringify(darkMode)
      )
  }, [darkMode]);

  useEffect(() => {
    if (section !== "Todos" && status !== "Todos") {
      api.get(`/projetos/${section}/${status}`).then((response) => {
        setProjects(response.data)
      console.log(response.data)
      })
    } else if(section !== 'Todos') {
      api.get(`/projetos/secao/${section}`).then((response) => {
        setProjects(response.data)
      })
    } else if(status !== 'Todos'){
      api.get(`/projetos/status/${status}`).then((response) => {
        setProjects(response.data)
      })
    } else {
      api.get(`/projetos`).then((response) => {
        setProjects(response.data)
      })
    }
    api.get("/secoes").then((response) => {
      setSections(response.data)
    })

  }, [projects, setProjects, section, status]);
  
  useEffect(() => {
    setFiltereds(projects);
  }, [projects]);

  const handleFilterName = useCallback((ev: string) => {
    setSearch(ev)
    setFiltereds(projects.filter((project) => project.nome.toLowerCase().includes(search.toLowerCase())));
  },[projects, setSearch, search]);  

  const handleFilterStatus = useCallback((status: string) => {
    setStatus(status);
  },[]);  
  
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
    <>
      <Header>
        <p>{i18n.t('projects.titleHeader')}</p>
      </Header>
      <Profile/>
      <Menu/>
      <Container darkMode={darkMode}>
        <div className="containerHead">
          <Title>
            {i18n.t('projects.titlePage')}
          </Title>
          <div>
            <Filter>
              <label>{i18n.t('projects.project')}</label>
              <input type="text" placeholder={i18n.t('projects.placeHolder')} value={search} onChange={(ev) => handleFilterName(ev.target.value)}/>
              <div>
                <label className="secao">{i18n.t('projects.section')}</label>
                <Dropdown>
                <span>{section}</span>
                  <div>
                    {sections.map((section) => (
                      <button onClick={() => setSection(section.nomeSecao)} key={section.nomeSecao}>{section.nomeSecao}</button>
                    ))}
                    <button onClick={() => setSection('Todos')}>{i18n.t('projects.all')}</button>
                  </div>
                </Dropdown>
              </div>
              <div>
                <label  className="status" >{i18n.t('projects.status')}</label>
                <Dropdown>
                  <span>{status}</span>
                  <div>
                    <button onClick={() => handleFilterStatus("ANDAMENTO")}>{i18n.t('projects.progress')}</button>
                    <button onClick={() => handleFilterStatus("ATRASADO")}>{i18n.t('projects.late')}</button>
                    <button onClick={() => handleFilterStatus("CONCLUÍDO")}>{i18n.t('projects.concluded')}</button>
                    <button onClick={() => handleFilterStatus("Todos")}>{i18n.t('projects.all')}</button>
                  </div>
                </Dropdown>
              </div>
              <button onClick={handleNotShow}><img src={display1} alt=""/></button>
              <button onClick={handleShow}><img src={display2} alt=""/></button>
            </Filter>
          </div>
        </div>
      </Container>
      <Cards > 
        { filtered.map((projeto) => (
          <Card id={projeto.id} key={projeto.id} show={show}/> 
        ))}
      </Cards>
    </>          
  ) 
};

export default Home;