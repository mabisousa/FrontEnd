import React, {useState, useCallback, useEffect} from "react";

import { TitlePopUp, InfosPopup, InfosGerais, Objetivo, Horas, HorasApontadas, 
  Skills, Table, ConsultoresAlocados, DetailsPopup, Container  } from "./style";

import { Chart } from "react-google-charts";
import { BsX } from 'react-icons/bs';

import api from "../../services/api";
import Grid from '../Grid';

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
    apontadas = projeto.horasApontadas;
    restantes = projeto.horasTotal - apontadas;
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
                {projeto.secao.idSecao} - {projeto.secao.nomeSecao}
              </h2>
              <h1>
                {projeto.id} - {projeto.nome}
              </h1>
            </TitlePopUp>
            <InfosPopup>
              <InfosGerais open={!!estaAberto}  className="cont">
                <h1>
                  {i18n.t('projectsPopup.infos')}
                </h1>
                <div>
                  <p>
                    {i18n.t('projectsPopup.manager')} ?
                  </p>
                  <p>
                    {i18n.t('projectsPopup.provider')} ?
                  </p>
                </div>
              </InfosGerais>
              <Objetivo open={!!estaAberto} className="cont">
                <h1>
                  {i18n.t('projectsPopup.objective')} 
                </h1>
                <p>
                  {projeto.descricao}
                </p>
              </Objetivo>
              <Horas open={!!estaAberto}  className="cont">
                <h1>
                  {i18n.t('projectsPopup.hours')} 
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
                      {i18n.t('projectsPopup.total')}
                      <span>
                        {projeto.horasTotal}
                      </span> 
                    </p> 
                    <p>
                      {i18n.t('projectsPopup.pointed')}
                      <span>
                        {projeto.horasApontadas}
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
                          {i18n.t('projectsPopup.skill')}
                        </td>
                        <td>
                          {i18n.t('projectsPopup.pointedHour')}
                        </td>
                      </tr>
                    </thead>
                    <tbody>
                      {projeto.skills.map((skill) => (
                        <tr key={skill.id}>
                          <td>
                            {skill.nome}
                          </td>
                          <td>
                            {skill.horasApontadas}
                          </td>
                        </tr>
                      ))}  
                    </tbody>
                  </table>
                </Table>
                <button id="visualizar" onClick={handleOpenPopup}>
                  {i18n.t('approval.consultants')}
                </button>
              </Skills>
              <ConsultoresAlocados id="ds" open={!!estaAberto}>
                <table>
                  <thead>
                    <tr>
                      <td>
                        {i18n.t('ConsultantTable.registration')}
                      </td>
                      <td>
                        {i18n.t('ConsultantTable.name')}
                      </td>
                    </tr>
                  </thead>
                  <tbody>
                    {projeto.consultores.map((consultor) => (
                      <tr key={consultor.id}>
                        <td>
                          {consultor.id}
                        </td>
                        <td>
                          {consultor.nome}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </ConsultoresAlocados>
            </InfosPopup>
            <DetailsPopup  color={projeto.status}>
              <Grid/>
              <h1>
                {projeto.status}
              </h1>
            </DetailsPopup>
          </div>
        </Container>
      }
    </>
  )
}

export default ProjectPopup;