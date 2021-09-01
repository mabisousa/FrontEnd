import React from 'react';
import { Cards, Card, BarStatus, TitleSection, TitleProject, HoldHours, Hours, Status, Date, Container,  
        TitlePopUp,
        TableConsultor,
        InfosPopup,
        DetailsPopup,
        Objetivo,
        InfosGerais,
        Skills,
        Horas,
        Table,
        HorasApontadas} from './styles';
import Profile from "../../components/Profile";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import Filters from '../../components/Filter';
import { Chart } from "react-google-charts";
import { BsX } from 'react-icons/bs';
import { ContainerFunc } from './popup.js';
import { openModal, closeModal } from '../../script/modal/script';
import Grid from '../../components/Grid';

const Home: React.FC = () => {
  return (
    <>
      <Header>
        <p>PROJETOS</p>
      </Header>

      <Profile/>
      <Menu/>
      <Filters/>
      <Cards> 
        <Card onClick={openModal}>
          <BarStatus/>
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
        <Card onClick={openModal}>
          <BarStatus/>
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
        <Card onClick={openModal}>
          <BarStatus/>
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
        <Card onClick={openModal}>
          <BarStatus/>
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
        <Card onClick={openModal}>
          <BarStatus/>
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
        <Card onClick={openModal}>
          <BarStatus/>
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
      </Cards>

      <Container id="popup">
        <div id="hold">
          <button onClick={closeModal}><BsX/></button>
          <TitlePopUp>
            <h2> 0000 - SEÇÃO XYZ</h2>
            <h1>0000000 - RESTAURAÇÃO DE ALTERADORES</h1>
          </TitlePopUp>
          <InfosPopup>
            <InfosGerais>
              <h1>INFORMAÇÕES GERAIS:</h1>
              <div>
                <p>GESTOR RESPONSÁVEL: </p>
                <p>FORNECEDOR: </p>
              </div>
            </InfosGerais>
            <Objetivo>
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
            <Horas>
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
            <Skills>
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
            </Skills>

          </InfosPopup>
          <DetailsPopup/>
        </div>
      </Container>
    </>
  )
};

export default Home;