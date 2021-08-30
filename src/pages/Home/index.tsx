import React from 'react';
import { Cards, Card, BarStatus, TitleSection, TitleProject, HoldHours, Hours, Status, Date, Container,  
       SideA, SideB, SideC, TitlePopUp, Responsible, Objective, TitleHours, HoursAppointment, Graphic,
       Table, TableConsultor, StatusPopUp, TitleSectionPopUp, TitleProjectPopUp, HoursPopUp} from './styles';
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
        <SideA id="sideA">
            <TitleSectionPopUp> 0000 - SEÇÃO XYZ</TitleSectionPopUp>
            <TitleProjectPopUp>0000000 - RESTAURAÇÃO DE ALTERADORES</TitleProjectPopUp>
          <TitlePopUp>
            <p > INFORMAÇÕES GERAIS:</p>
          </TitlePopUp> 
          <Responsible>
            <p > GESTOR RESPONSÁVEL:</p>
            <p >FORNECEDOR:</p>
          </Responsible>
          <Objective>
            <p > OBJETIVO:</p>
            <p >  Lorem ipsum himenaeos sollicitudin mi sodales ullamcorper, vulputate eu a nullam 
            cubilia, commodo dictumst turpis ligula posuere. leo potenti condimentum nulla vel ultrices vestibulum 
            rutrum tortor, semper fames scelerisque facilisis conubia scelerisque bia.nulla vel ultrices vestibulum
            rutrum tortor, semper fames scelerisque facilisis conubia scelerisque bia.
            Lorem ipsum himenaeos sollicitudin mi sodales ullamcorper, vulputate eu a nullam 
            cubilia, commodo dictumst turpis ligula posuere. leo potenti condimentum nulla vel ultrices vestibulum 
            rutrum tortor, semper fames scelerisque facilisis conubia scelerisque bia.nulla vel ultrices vestibulum
            rutrum tortor, semper fames scelerisque facilisis conubia scelerisque bia.
            Lorem ipsum himenaeos sollicitudin mi sodales ullamcorper, vulputate eu a nullam 
            cubilia, commodo dictumst turpis ligula posuere. leo potenti condimentum nulla vel ultrices vestibulum 
            rutrum tortor, semper fames scelerisque facilisis conubia scelerisque bia.nulla vel ultrices vestibulum
            rutrum tortor, semper fames scelerisque facilisis conubia scelerisque bia.</p>           
          </Objective>
          <div id="grid">
            <Grid/>
          </div>
        </SideA> 
        <SideB id="sideB">
          <button onClick={closeModal}><BsX id="x"/></button>
          <TitleHours>
            <p>HORAS:</p>
          </TitleHours>
          <HoursAppointment>
            <Graphic>
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
                  pieHole: 0.7,
                  legend: 'none',
                  backgroundColor: '',
                  pieSliceText: 'none',
                  slices: {
                    0: { color: '57b7dc' },
                    1: { color: 'B4DDFB' },
                  },  
                }}
              />
            </Graphic>
            <HoursPopUp>
              <p>TOTAL:
              <span>1600h</span> 
              </p> 
              <p>APONTADAS:
              <span>800h</span>
              </p>
            </HoursPopUp>
          </HoursAppointment>
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
          <StatusPopUp>
            <button id="btn" onClick={ContainerFunc}>
              CONSULTORES ALOCADOS
            </button>
            <span id="estado">
              EM ANDAMENTO
            </span>
          </StatusPopUp>     
        </SideB>
        <SideC id="sideC">
          <TableConsultor>
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
          </TableConsultor>
        </SideC>
      </Container>
    </>
  )
};

export default Home;