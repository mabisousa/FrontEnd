import React, { useCallback, useEffect, useState } from 'react';

import { Container, Filtros, Titulo, Cards, Filtro } from './style';

import Dropdown from "../../components/Dropdown";
import Profile from "../../components/Profile";
import Header from "../../components/Header";
import Card from "../../components/Cards";
import Menu from "../../components/Menu";

import api from "../../services/api";

import { FaThList } from "react-icons/fa";
import { IoGrid } from "react-icons/io5";

import { i18n } from "../../translate/i18n";

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

interface tema{
  alternarTema(): void
}

const Home: React.FC<tema> = ({alternarTema}) => {

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
        <Header alternarTema={alternarTema}>
          <p>
            {i18n.t('projetos.titulo')}
          </p>
        </Header>
        <Profile/>
        <Menu/>
        <Filtros>
          <Titulo>
            {i18n.t('projetos.tituloPagina')}
          </Titulo>
          <Filtro>
            <label>{i18n.t('projetos.projeto')}</label>
            <input type="text" placeholder={i18n.t('projetos.placeHolder')} 
              value={search} onChange={(ev) => handleFilterName(ev.target.value)}/>
            <div >
              <label className="secao">{i18n.t('projetos.secao')}</label>
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
                    {i18n.t('projetos.todos')}
                  </button>
                </div>
              </Dropdown>
            </div>
            <div>
              <label  className="status" >{i18n.t('projetos.status')}</label>
              <Dropdown>
                <span>{status}</span>
                <div>
                  <button onClick={() => handleFilterStatus("ANDAMENTO")}>
                    {i18n.t('projetos.andamento')}
                  </button>
                  <button onClick={() => handleFilterStatus("ATRASADO")}>
                    {i18n.t('projetos.atrasado')}
                  </button>
                  <button onClick={() => handleFilterStatus("CONCLUÍDO")}>
                    {i18n.t('projetos.concluido')}
                  </button>
                  <button onClick={() => handleFilterStatus("Todos")}>
                    {i18n.t('projetos.todos')}
                  </button>
                </div>
              </Dropdown>
            </div>
            <button onClick={handleShowListCard}>
              <FaThList/>
            </button>
            <button onClick={handleShowGridCard}>
              <IoGrid/>
            </button>
          </Filtro>
        </Filtros>
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