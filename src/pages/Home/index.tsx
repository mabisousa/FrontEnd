import React, { useCallback } from 'react';
import { Cards, Card, TitleSection, TitleProject, HoldHours, Hours, Status, Date, Container,  
        TitlePopUp,
        InfosPopup,
        DetailsPopup,
        Objetivo,
        InfosGerais,
        Skills,
        Horas,
        Table,
        HorasApontadas,
        ConsultoresAlocados} from './styles';
import Profile from "../../components/Profile";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import Filters from '../../components/Filter';
import { Chart } from "react-google-charts";
import { BsX } from 'react-icons/bs';
import { openModal } from '../../script/modal/script';
import Grid from '../../components/Grid';
import { useState } from 'react';

const Home: React.FC = () => {

  const [isOpen, setOpen] = useState(false);

  const handleOpen = useCallback(() => {
    if(!!isOpen === false) {
    setOpen(true);    
    } else {
        setOpen(false);    
    }
    
}, [isOpen, setOpen]);

  const closeModal = useCallback(() => {
    var popup = document.getElementById("popup");
    if(popup) {
      popup.style.visibility = "hidden";
    }
    if(isOpen) {
      setOpen(false);
    }
  },[isOpen, setOpen]);
  return (
    <>
      <Header>
        <p>PROJETOS</p>
      </Header>

      <Profile/>
      <Menu/>
      <Filters/>
      <Cards> 
        <Card color="#EBB93A" onClick={openModal}>
          <TitleSection> 0000 - SEÇÃO XYZ</TitleSection>
          <TitleProject>0000000 - RESTAURAÇÃO DE ALTERADORES </TitleProject>
          <HoldHours>
            <Hours>
              <p>TOTAL:</p>
              <p>1600h</p>
            </Hours>
              <Hours>
                <p>APONTADAS:</p>
                <p>800h</p>
              </Hours>
            </HoldHours>
            <Status>
              <p>Situação: </p>
              <p>Em Andamento</p>
            </Status>
            <Date>
              <p>De:20/20/2020</p>
              <p>Até:20/20/2020</p>
            </Date>
        </Card>
        <Card color="#AC341A" onClick={openModal}>
          <TitleSection> 0000 - SEÇÃO XYZ</TitleSection>
          <TitleProject>0000000 - RESTAURAÇÃO DE ALTERADORES </TitleProject>
          <HoldHours>
            <Hours>
              <p>TOTAL:</p>
              <p>1600h</p>
            </Hours>
              <Hours>
                <p>APONTADAS:</p>
                <p>800h</p>
              </Hours>
            </HoldHours>
            <Status>
              <p>Situação: </p>
              <p>Atrasado</p>
            </Status>
            <Date>
              <p>De:20/20/2020</p>
              <p>Até:20/20/2020</p>
            </Date>
        </Card>
        <Card color="#6AACDA" onClick={openModal}>
          <TitleSection> 0000 - SEÇÃO XYZ</TitleSection>
          <TitleProject>0000000 - RESTAURAÇÃO DE ALTERADORES </TitleProject>
          <HoldHours>
            <Hours>
              <p>TOTAL:</p>
              <p>1600h</p>
            </Hours>
              <Hours>
                <p>APONTADAS:</p>
                <p>800h</p>
              </Hours>
            </HoldHours>
            <Status>
              <p>Situação: </p>
              <p>Concluído</p>
            </Status>
            <Date>
              <p>De:20/20/2020</p>
              <p>Até:20/20/2020</p>
            </Date>
        </Card>
        <Card color="#6AACDA" onClick={openModal}>
          <TitleSection> 0000 - SEÇÃO XYZ</TitleSection>
          <TitleProject>0000000 - RESTAURAÇÃO DE ALTERADORES </TitleProject>
          <HoldHours>
            <Hours>
              <p>TOTAL:</p>
              <p>1600h</p>
            </Hours>
              <Hours>
                <p>APONTADAS:</p>
                <p>800h</p>
              </Hours>
            </HoldHours>
            <Status>
              <p>Situação: </p>
              <p>Concluído</p>
            </Status>
            <Date>
              <p>De:20/20/2020</p>
              <p>Até:20/20/2020</p>
            </Date>
        </Card>
        <Card color="#6AACDA" onClick={openModal}>
          <TitleSection> 0000 - SEÇÃO XYZ</TitleSection>
          <TitleProject>0000000 - RESTAURAÇÃO DE ALTERADORES </TitleProject>
          <HoldHours>
            <Hours>
              <p>TOTAL:</p>
              <p>1600h</p>
            </Hours>
              <Hours>
                <p>APONTADAS:</p>
                <p>800h</p>
              </Hours>
            </HoldHours>
            <Status>
              <p>Situação: </p>
              <p>Concluído</p>
            </Status>
            <Date>
              <p>De:20/20/2020</p>
              <p>Até:20/20/2020</p>
            </Date>
        </Card>
        <Card color="#6AACDA" onClick={openModal}>
          <TitleSection> 0000 - SEÇÃO XYZ</TitleSection>
          <TitleProject>0000000 - RESTAURAÇÃO DE ALTERADORES </TitleProject>
          <HoldHours>
            <Hours>
              <p>TOTAL:</p>
              <p>1600h</p>
            </Hours>
              <Hours>
                <p>APONTADAS:</p>
                <p>800h</p>
              </Hours>
            </HoldHours>
            <Status>
              <p>Situação: </p>
              <p>Concluído</p>
            </Status>
            <Date>
              <p>De:20/20/2020</p>
              <p>Até:20/20/2020</p>
            </Date>
        </Card>
      </Cards>

      <Container Open={!!isOpen} id="popup">
        <div id="hold">
          <button onClick={closeModal}><BsX/></button>
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
};

export default Home;