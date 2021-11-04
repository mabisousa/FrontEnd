import React, { useCallback, useEffect, useState } from 'react';

import { Title, Container, Filter, Cards, Filters } from './style';

import Dropdown from "../../components/Dropdown";
import Profile from "../../components/Profile";
import Header from "../../components/Header";
import Card from "../../components/Cards";
import Menu from "../../components/Menu";

import api from "../../services/api";

import listCard from '../../assets/listView.svg';
import gridCard from '../../assets/gridView.svg';

import { i18n } from "../../translate/i18n";

import light from '../../styles/themes/light'
import dark from '../../styles/themes/dark'
import { string } from 'yup/lib/locale';
import { number } from 'yup';

interface Projetos {
  id: number,
  secao: {
    idSecao: number,
    secaoNome: string,
  },
  projetoNome: string,
  projetoDescricao: string,
  projetoStatus: string,
  projetoDateInicio: Date,
  projetoDateFim: Date,
  projetoHorasTotais: number,
  projetoHorasTrabalhadas: number,
  projetoConsultores: [
    {
      id: number,
      consultorNome: string,
      consultorStatus: string
    }
  ],
  projetoSkills: [
    {
      skillNome: string,
      horasTotais: number,
      horasTrabalhadas: number
    }
  ]
}

interface Secoes {
    idSecao: number,
    secaoNome: string
}

const Home: React.FC = () => {

  const [theme, setTheme] = useState(light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  const [filtered, setFiltereds] = useState<Projetos[]>([]);
  const [projects, setProjects] = useState<Projetos[]>([]);
  const [sections, setSections] = useState<Secoes[]>([]);
  const [showCard, setShowCard] = useState(false);
  const [section, setSection] = useState('Todos');
  const [status, setStatus] = useState('Todos');
  const [search, setSearch] = useState('');

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
    setFiltereds(projects.filter((project) => project.projetoNome.toLowerCase().includes(search.toLowerCase())));
  },[projects, setSearch, search]);  

  const handleFilterStatus = useCallback((status: string) => {
    setStatus(status);
  },[]);  
  
  const handleShowGridCard = useCallback(() => {
    if(!!showCard === false) {
      setShowCard(true);    
    }
  }, [showCard, setShowCard]);

  const handleShowListCard = useCallback(() => {
    if(!!showCard !== false) {
      setShowCard(false);    
    }
  }, [showCard, setShowCard]);

  return (
    <>
      <Container>
        <Header toggleTheme={toggleTheme}>
          <p>
            {i18n.t('projects.titleHeader')}
          </p>
        </Header>
        <Profile/>
        <Menu/>
        <Filters>
          <Title>
            {i18n.t('projects.titlePage')}
          </Title>
          <Filter>
            <label>{i18n.t('projects.project')}</label>
            <input type="text" placeholder={i18n.t('projects.placeHolder')} 
              value={search} onChange={(ev) => handleFilterName(ev.target.value)}/>
            <div >
              <label className="secao">{i18n.t('projects.section')}</label>
              <Dropdown>
                <span>
                  {section}
                </span>
                <div>
                  {sections.map((section) => (
                    <button onClick={() => setSection(section.secaoNome)} key={section.secaoNome}>
                      {section.secaoNome}
                    </button>
                  ))}
                  <button onClick={() => setSection('Todos')}>
                    {i18n.t('projects.all')}
                  </button>
                </div>
              </Dropdown>
            </div>
            <div>
              <label  className="status" >{i18n.t('projects.status')}</label>
              <Dropdown>
                <span>{status}</span>
                <div>
                  <button onClick={() => handleFilterStatus("ANDAMENTO")}>
                    {i18n.t('projects.progress')}
                  </button>
                  <button onClick={() => handleFilterStatus("ATRASADO")}>
                    {i18n.t('projects.late')}
                  </button>
                  <button onClick={() => handleFilterStatus("CONCLUÍDO")}>
                    {i18n.t('projects.concluded')}
                  </button>
                  <button onClick={() => handleFilterStatus("Todos")}>
                    {i18n.t('projects.all')}
                  </button>
                </div>
              </Dropdown>
            </div>
            <button onClick={handleShowListCard}>
              <img src={listCard} alt=""/>
            </button>
            <button onClick={handleShowGridCard}>
              <img src={gridCard} alt=""/>
            </button>
          </Filter>
        </Filters>
      <Cards> 
        { filtered.map((projeto) => (
          <Card id={projeto.id} key={projeto.id} mostrar={showCard}/> 
        ))}
      </Cards>
      </Container>
      
    </>          
  ) 
};

export default Home;