import React, {useState, useCallback} from "react";
import { Container,  
    TitlePopUp, InfosPopup, DetailsPopup, Objetivo, InfosGerais, Skills, Horas, Table, HorasApontadas, 
    ConsultoresAlocados,} from "./style"

import { Chart } from "react-google-charts";
import { BsX } from 'react-icons/bs';
import Grid from '../../components/Grid';

const Popup: React.FC = () => {
    const [isOpen, setOpen] = useState(false);
    const [showPopup, setShowPopup] = useState(false);

    const handleOpen = useCallback(() => {
        if(!!isOpen === false) {
          setOpen(true);    
        } else {
          setOpen(false);    
        }
      }, [isOpen, setOpen]);
    return(
    <>
        <Container Open={!!isOpen}  show={!!showPopup}>
        <div id="hold">
          <button onClick={() => setShowPopup(!showPopup)}><BsX/></button>
          <TitlePopUp>
            <h2> 0000 - SEÇÃO XYZ</h2>
            <h1>0000000 - RESTAURAÇÃO DE ALTERADORES</h1>
          </TitlePopUp>
          <InfosPopup>
            <InfosGerais Open={!!isOpen}  className="cont">
              <h1>INFORMAÇÕES GERAIS:</h1>
              <div>
                <p>GESTOR RESPONSÁVEL: </p>
                <p>FORNECEDOR: </p>
              </div>
            </InfosGerais>
            <Objetivo Open={!!isOpen} className="cont">
              <h1>OBJETIVO: </h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                 Consequuntur officiis ducimus ut debitis mollitia modi 
                 tempora unde nobis reiciendis illum libero ipsam excepturi
                  itaque aperiam quae assumenda praesentium, maxime consequatur.
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                 Consequuntur officiis ducimus ut debitis mollitia modi 
                 tempora unde nobis reiciendis illum libero ipsam excepturi
                  itaque aperiam quae assumenda praesentium, maxime consequatur.
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                 Consequuntur officiis ducimus ut debitis mollitia modi 
                 tempora unde nobis reiciendis illum libero ipsam excepturi
                  itaque aperiam quae assumenda praesentium, maxime consequatur.
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
                    ['Total', 10],
                    ['Apontadas', 10]
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
                    <span>1600h</span> 
                  </p> 
                  <p>APONTADAS:
                    <span>800h</span>
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
                    <tr>
                      <td>Desenvolvimento PHP</td>
                      <td>40H</td>
                    </tr>
                    <tr>
                      <td>Desenvolvimento JAVA</td>
                      <td>15H</td>
                    </tr>
                    <tr>
                      <td>Desenvolvimento React</td>
                      <td>20H</td>
                    </tr>
                  </tbody>
                </table>
              </Table>
              <button id="visualizar" onClick={handleOpen}>VISUALIZAR CONSULTORES</button>
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
                  <tr>
                    <td>67270</td>
                    <td >Isac Freire Bezerra</td>
                  </tr>
                  <tr>
                    <td>67271</td>
                    <td>Jean Henrique Reiguel</td>
                  </tr>
                  <tr>
                    <td>67270</td>
                    <td >Isac Freire Bezerra</td>
                  </tr>
                  <tr>
                    <td>67271</td>
                    <td>Jean Henrique Reiguel</td>
                  </tr>
                  <tr>
                    <td>67270</td>
                    <td >Isac Freire Bezerra</td>
                  </tr>
                  <tr>
                    <td>67271</td>
                    <td>Jean Henrique Reiguel</td>
                  </tr>
                  <tr>
                    <td>67270</td>
                    <td >Isac Freire Bezerra</td>
                  </tr>
                  <tr>
                    <td>67271</td>
                    <td>Jean Henrique Reiguel</td>
                  </tr>
                  <tr>
                    <td>67271</td>
                    <td>Jean Henrique Reiguel</td>
                  </tr>
                  <tr>
                    <td>67270</td>
                    <td >Isac Freire Bezerra</td>
                  </tr>
                  <tr>
                    <td>67271</td>
                    <td>Jean Henrique Reiguel</td>
                  </tr><tr>
                    <td>67271</td>
                    <td>Jean Henrique Reiguel</td>
                  </tr>
                  <tr>
                    <td>67270</td>
                    <td >Isac Freire Bezerra</td>
                  </tr>
                  <tr>
                    <td>67271</td>
                    <td>Jean Henrique Reiguel</td>
                  </tr><tr>
                    <td>67271</td>
                    <td>Jean Henrique Reiguel</td>
                  </tr>
                  <tr>
                    <td>67270</td>
                    <td >Isac Freire Bezerra</td>
                  </tr>
                  <tr>
                    <td>67271</td>
                    <td>Jean Henrique Reiguel</td>
                  </tr>
                </tbody>
              </table>
            </ConsultoresAlocados>
          </InfosPopup>
          <DetailsPopup>
            <Grid/>
            <h1>EM ANDAMENTO</h1>
          </DetailsPopup>
        </div>
      </Container>
    </>
    )
}

export default Popup;