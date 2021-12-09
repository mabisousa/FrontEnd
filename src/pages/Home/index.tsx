import React, { useCallback, useEffect, useState } from 'react';

import { Container, Filtros, Titulo, Cards, Filtro, Formulario } from './style';

import Dropdown from "../../components/Dropdown";
import Perfil from "../../components/Perfil";
import Cabecalho from "../../components/Cabecalho";
import Card from "../../components/Cards";
import Menu from "../../components/Menu";

import api from "../../services/api";

import { IoGrid } from "react-icons/io5";
import { FaThList } from "react-icons/fa";

import { i18n } from "../../translate/i18n";


interface Projetos {
  id: number,
  secao: {
    idSecao: number,
    secaoNome: string,
  },
  projetoNome: string,
  projetoResponsavel: string,
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
interface Responsavel {
  idResponsavel: number,
  fornecedor: {
    idFornecedor: number,
    fornecedorNome: string, 
  },
  responsavelNome: string,
  fornecedorAlocacoes: [
    {
      projeto: {
      id: number,
      secao: {
        idSecao: number,
        secaoNome: string,
      },
      projetoNome: string,
      projetoResponsavel: string,
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
        ]
      }
      valorTotal: number,
      horasTotais: number,
      horasTrabalhadas: number
    }
  ]
}
interface Consultor {
  idConsultor: number,
  consultorNome: string,
  consultorStatus: string,
  consultorValorHora: number,
  consultorAlocacoes: [
    {
      projeto: {
        id: number,
        secao: {
          idSecao: number,
          secaoNome: string,
        },
        projetoNome: string,
        projetoResponsavel: string,
        projetoDescricao: string,
        projetoStatus: string,
        projetoDateInicio: Date,
        projetoDateFim: Date,
        projetoHorasTotais: number,
        projetoHorasTrabalhadas: number,
      }
    }
  ]
}

const Home: React.FC<tema> = ({alternarTema}) => {
  const [responsavel,setResponsavel] = useState<Responsavel>();
  const [consultor,setConsultor] = useState<Consultor>();

  let infos = localStorage.getItem("@WEGusers:usuario")
  let user!: { email: string, roles: [{ roleNome: string }] };

  
  if(infos) {
    user = JSON.parse(infos);
    
    user.roles.map(role => {
      if(role.roleNome === "ROLE_FORNECEDOR") {
        api.get(`responsaveis/${user.email}`).then((response) => {
          setResponsavel(response.data);
        })
      } else if(role.roleNome === "ROLE_CONSULTOR") {
        api.get(`consultores/email/${user.email}`).then((response) => {
         setConsultor(response.data);
        })
      }
    })
  }
  const [filtrados, setFiltrados] = useState<Projetos[]>([]);
  const [projetos, setProjetos] = useState<Projetos[]>([]);
  const [secoes, setSecoes] = useState<Secoes[]>([]);
  const [mostrarCard, setMostrarCard] = useState(false);
  const [secao, setSecao] = useState('Todos');
  const [status, setStatus] = useState('Todos');
  const [pesquisa, setPesquisa] = useState('');

  useEffect(() => {
    if (secao !== "Todos" && status !== "Todos") {
      api.get(`/projetos/${secao}/${status}`).then((response) => {
        setProjetos(response.data)
      })
    } else if(secao !== 'Todos') {
      api.get(`/projetos/secao/${secao}`).then((response) => {
        setProjetos(response.data)
      })
    } else if(status !== 'Todos'){
      api.get(`/projetos/status/${status}`).then((response) => {
        setProjetos(response.data)
      })
    } else {
      api.get(`/projetos`).then((response) => {
        setProjetos(response.data)
      })
    }
    api.get("/secoes").then((response) => {
      setSecoes(response.data)
    })
    
  }, [projetos, setProjetos, secao, status]);
  
  // useEffect(() => {
  //   responsavel?.fornecedorAlocacoes.map(projeto => {
  //     setFiltereds(projects.filter(project => project === projeto));
  //   })
  // }, [projects]);

  const handleFiltrarNome = useCallback((ev: string) => {
    setPesquisa(ev)
    setFiltrados(projetos.filter((projetos) => projetos.projetoNome.toLowerCase().includes(pesquisa.toLowerCase())));
  },[projetos, setPesquisa, pesquisa]);  

  const handleFiltrarStatus = useCallback((status: string) => {
    setStatus(status);
  },[]);  
  
  const handleMostrarGrade = useCallback(() => {
    if(!!mostrarCard === false) {
      setMostrarCard(true);    
    }
  }, [mostrarCard, setMostrarCard]);

  const handleMostrarLista = useCallback(() => {
    if(!!mostrarCard !== false) {
      setMostrarCard(false);    
    }
  }, [mostrarCard, setMostrarCard]);

    // Filtrar
    //responsavel?.fornecedorAlocacoes.map((alocacao) => {
    // })
    // projetos.map((projeto) => {
    // })
  return (
    <>
      <Container>
        <Cabecalho alternarTema={alternarTema}>
          <p>
            {i18n.t('projetos.titulo')}
          </p>
        </Cabecalho>
        <Perfil/>
        <Menu/>
        <Filtros>
          <Titulo>
            {i18n.t('projetos.tituloPagina')}
          </Titulo>
          <Filtro>
            <Formulario>
              <label>
                {i18n.t('projetos.projeto')}
              </label>
              <input type="text" placeholder={i18n.t('projetos.placeHolder')} 
                value={pesquisa} onChange={(ev) => handleFiltrarNome(ev.target.value)}/>
            </Formulario>
            <div>
              <label className="secao">{i18n.t('projetos.secao')}</label>
              <Dropdown>
                <span>
                  {secao}
                </span>
                <div>
                  {secoes.map((secao) => (
                    <button onClick={() => setSecao(secao.secaoNome)} key={secao.secaoNome}>
                      {secao.secaoNome}
                    </button>
                  ))}
                  <button onClick={() => setSecao('Todos')}>
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
                  <button onClick={() => handleFiltrarStatus("ANDAMENTO")}>
                    {i18n.t('projetos.andamento')}
                  </button>
                  <button onClick={() => handleFiltrarStatus("ATRASADO")}>
                    {i18n.t('projetos.atrasado')}
                  </button>
                  <button onClick={() => handleFiltrarStatus("CONCLUÍDO")}>
                    {i18n.t('projetos.concluido')}
                  </button>
                  <button onClick={() => handleFiltrarStatus("Todos")}>
                    {i18n.t('projetos.todos')}
                  </button>
                </div>
              </Dropdown>
            </div>
            <button onClick={handleMostrarLista}>
              <FaThList/>
            </button>
            <button onClick={handleMostrarGrade}>
              <IoGrid/>
            </button>
          </Filtro>
        </Filtros>
      <Cards> 
        { responsavel && responsavel.fornecedorAlocacoes.length > 0 ? 
          responsavel.fornecedorAlocacoes.map((alocacao) => (
            <Card id={alocacao.projeto.id} key={alocacao.projeto.id} mostrar={mostrarCard}/> 
          ))
          : consultor && consultor.consultorAlocacoes.length > 0? 
          consultor.consultorAlocacoes.map((alocacao) => (
            <Card id={alocacao.projeto.id} key={alocacao.projeto.id} mostrar={mostrarCard}/> 
          ))
          : <h1 className="mensagem">
              {i18n.t('projetos.projetosAlocados')}
            </h1>
        }
      </Cards>
      </Container>
      
    </>          
  ) 
};

export default Home;