import React, {useState, useCallback, useEffect} from "react";
import { TitlePopUp, InfosPopup, InfosGerais, Objetivo, Horas, HorasApontadas, Skills, Table, ConsultoresAlocados, DetailsPopup  } from "../../pages/Home/style"
import { ContainerPopup } from "./style";
import { Chart } from "react-google-charts";
import { BsX } from 'react-icons/bs';
import Grid from '../Grid';
import api from "../../services/api"
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
interface Projeto {
  id: number,
  showPopup: (arg0: boolean) => void,
}
const Popup: React.FC<Projeto> = ({id, showPopup}) => {

    const [isOpen, setOpen] = useState(false);
    const [projeto, setProjeto] = useState<Projetos>();


    const handleOpenPopup = useCallback(() => {
        if(!!isOpen === false) {
          setOpen(true);    
        } else {
          setOpen(false);    
        }
      }, [isOpen, setOpen]);
      
      const handleClosePopup = () => {
        showPopup(false);
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
        <ContainerPopup Open={!!isOpen}  show={!!showPopup}>
        <div id="hold">
          <button onClick={handleClosePopup}><BsX/></button>
          <TitlePopUp>
            <h2> {projeto.secao.idSecao} - {projeto.secao.nomeSecao}</h2>
            <h1>{projeto.id} - {projeto.nome}</h1>
          </TitlePopUp>
          <InfosPopup>
            <InfosGerais Open={!!isOpen}  className="cont">
              <h1>INFORMAÇÕES GERAIS:</h1>
              <div>
                <p>GESTOR RESPONSÁVEL: ?</p>
                <p>FORNECEDOR: ?</p>
              </div>
            </InfosGerais>
            <Objetivo Open={!!isOpen} className="cont">
              <h1>OBJETIVO: </h1>
              <p>
                {projeto.descricao}
              </p>
            </Objetivo>
            <Horas Open={!!isOpen}  className="cont">
              <h1>HORAS: </h1>
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
                  <p>TOTAL:
                    <span>{projeto.horasTotal}</span> 
                  </p> 
                  <p>APONTADAS:
                    <span>{projeto.horasApontadas}</span>
                  </p>
                </div>
              </HorasApontadas>
            </Horas>
            <Skills Open={!!isOpen}  className="cont">
              <Table id="table">
                <table>
                  <thead>
                    <tr>
                      <td>SKILL</td>
                      <td>HORAS APONTADAS</td>
                    </tr>
                  </thead>
                  <tbody>
                   {projeto.skills.map(skill => (

                    <tr key={skill.id}>
                        <td>{skill.nome}</td>
                        <td>{skill.horasApontadas}</td>
                    </tr>
                   ))}  
                  </tbody>
                </table>
              </Table>
              <button id="visualizar" onClick={handleOpenPopup}>VISUALIZAR CONSULTORES</button>
            </Skills>
            <ConsultoresAlocados Open={!!isOpen}>
              <table>
                <thead>
                  <tr>
                    <td>CADASTRO</td>
                    <td>NOME</td>
                  </tr>
                </thead>
                <tbody>
                {projeto.consultores.map((consultor) => (
                  <tr key={consultor.id}>
                    <td>{consultor.id}</td>
                    <td>{consultor.nome}</td>
                  </tr>
                ))}
                </tbody>
              </table>
            </ConsultoresAlocados>
          </InfosPopup>
          <DetailsPopup color={projeto.status}>
            <Grid/>
            <h1>{projeto.status}</h1>
          </DetailsPopup>
        </div>
      </ContainerPopup>
    }
    </>
    )
}

export default Popup;