import React, {useState, useCallback, useEffect} from "react";

import { TitlePopUp, InfosPopup, InfosGerais, Objetivo, Horas, HorasApontadas, 
  Skills, Table, ConsultoresAlocados, DetailsPopup, Container  } from "./style";

import { Chart } from "react-google-charts";
import { BsX } from 'react-icons/bs';

import api from "../../services/api";
import Grid from '../Grid';

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

interface Projeto {
  id: number,
  mostrarPopup: (arg0: boolean) => void,
}

const ProjectPopup: React.FC<Projeto> = ({id, mostrarPopup}) => {

  const [estaAberto, setAberto] = useState(false);
  const [projeto, setProjeto] = useState<Projetos>();

  const handleOpenPopup = useCallback(() => {
    if(!!estaAberto === false) {
      setAberto(true);    
    } else {
      setAberto(false);    
    }
  }, [estaAberto, setAberto]);
    
  const handleClosePopup = () => {
    mostrarPopup(false);
  }

  useEffect(() => {
    api.get(`/projetos/${id}`).then((response) => {
      setProjeto(response.data)
    })
  }, [projeto, setProjeto, id]);

  let restantes = 0;
  let apontadas = 0;

  if (projeto) {
    apontadas = projeto.projetoHorasTrabalhadas;
    restantes = projeto.projetoHorasTotais - apontadas;
  } 

  return(
    <>
      { projeto &&
        <Container open={!!estaAberto}  show={!!mostrarPopup}>
          <div id="hold">
            <button onClick={handleClosePopup}>
              <BsX/>
            </button>
            <TitlePopUp>
              <h2> 
                {projeto.secao.idSecao} - {projeto.secao.secaoNome}
              </h2>
              <h1>
                {projeto.id} - {projeto.projetoNome}
              </h1>
            </TitlePopUp>
            <InfosPopup>
              <InfosGerais open={!!estaAberto}  className="cont">
                <h1>
                  {i18n.t('projetoPopup.info')}
                </h1>
                <div>
                  <p>
                    {i18n.t('projetoPopup.gestor')} ?
                  </p>
                  <p>
                    {i18n.t('projetoPopup.fornecedor')} ?
                  </p>
                </div>
              </InfosGerais>
              <Objetivo open={!!estaAberto} className="cont">
                <h1>
                  {i18n.t('projetoPopup.objetivo')} 
                </h1>
                <p>
                  {projeto.projetoDescricao}
                </p>
              </Objetivo>
              <Horas open={!!estaAberto}  className="cont">
                <h1>
                  {i18n.t('projetoPopup.horas')} 
                </h1>
                <HorasApontadas>
                  <Chart
                    width={'160px'}
                    height={'160px'}
                    rootProps
                    chartType="PieChart"
                    data={[
                      ['Task', 'Hours per Day'],  
                      ['Apontadas', apontadas],
                      ['Restante', restantes]
                    ]}
                    options={{
                      pieHole: 0.7  ,
                      tooltip: { trigger: 'none'},
                      legend: 'none',
                      backgroundColor: '',
                      pieSliceText: 'none',
                      slices: {
                        0: { color: '57b7dc' },
                        1: { color: 'B4DDFB' },
                      },  
                    }}
                  />
                  <div>
                    <p>
                      {i18n.t('projetoPopup.total')}
                      <span>
                        {projeto.projetoHorasTotais}
                      </span> 
                    </p> 
                    <p>
                      {i18n.t('projetoPopup.apontadas')}
                      <span>
                        {projeto.projetoHorasTrabalhadas}
                      </span>
                    </p>
                  </div>
                </HorasApontadas>
              </Horas>
              <Skills open={!!estaAberto}  className="cont">
                <Table id="table">
                  <table>
                    <thead>
                      <tr>
                        <td>
                          {i18n.t('projetoPopup.habilidades')}
                        </td>
                        <td>
                          {i18n.t('projetoPopup.horasApontadas')}
                        </td>
                      </tr>
                    </thead>
                    <tbody>
                      {projeto.projetoSkills.map((skill) => (
                        <tr key={skill.skillNome}>
                          <td>
                            {skill.skillNome}
                          </td>
                          <td>
                            {skill.horasTrabalhadas}
                          </td>
                        </tr>
                      ))}  
                    </tbody>
                  </table>
                </Table>
                <button id="visualizar" onClick={handleOpenPopup}>
                  {i18n.t('aprovacao.consultor')}
                </button>
              </Skills>
              <ConsultoresAlocados id="ds" open={!!estaAberto}>
                <table>
                  <thead>
                    <tr>
                      <td>
                        {i18n.t('tabelaConsultor.cadastro')}
                      </td>
                      <td>
                        {i18n.t('tabelaConsultor.nome')}
                      </td>
                    </tr>
                  </thead>
                  <tbody>
                    {projeto.projetoConsultores.map((consultor) => (
                      <tr key={consultor.id}>
                        <td>
                          {consultor.id}
                        </td>
                        <td>
                          {consultor.consultorNome}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </ConsultoresAlocados>
            </InfosPopup>
            <DetailsPopup  color={projeto.projetoStatus}>
              <Grid/>
              <h1>
                {projeto.projetoStatus}
              </h1>
            </DetailsPopup>
          </div>
        </Container>
      }
    </>
  )
}

export default ProjectPopup;