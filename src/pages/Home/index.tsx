import React from 'react';

import { Cards, Container} from './styles';
import Profile from "../../components/Profile";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import Filters from '../../components/Filter';
import { Chart } from "react-google-charts";
import { BsX } from 'react-icons/bs';
import { ContainerFunc } from './popup.js';
import { openModal, closeModal } from '../../script/modal/script';

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
        <div id="cards">
          <div id="card">
            <button onClick={ openModal }>
            <div id="barStatus"> 
            </div>
              <p id="secao"> 0000 - SEÇÃO XYZ</p>
              <p id="title">0000 - PROJETO AAAAAAAA</p>
              <div id="hold_hours">
                <div id="hours">
                  <p id="info">TOTAL:</p>
                  <p id="info">1600h</p>
                </div>
                <div id="hours">
                  <p id="info">APONTADAS:</p>
                  <p id="info">800h</p>
                </div>
              </div>
              <div id="situation">
                <div id="status">
                  <p>Situação: </p>
                  <p>Em Andamento</p>
                </div>
              </div>
              <div id="bar">
                  <div id="progress"></div>
              </div>
              <div id="dates">
                <p>De:20/20/2020</p>
                <p>Até:20/20/2020</p>
              </div>
              </button>
          </div>   
          <a href="projetos/popUp" id="card">
            <div id="barStatus"> 
            </div>
              <p id="secao"> 0000 - SEÇÃO XYZ</p>
              <p id="title">0000 - PROJETO AAAAAAAA</p>
              <div id="hold_hours">
                <div id="hours">
                  <p id="info">TOTAL:</p>
                  <p id="info">1600h</p>
                </div>
                <div id="hours">
                  <p id="info">APONTADAS:</p>
                  <p id="info">800h</p>
                </div>
              </div>
              <div id="situation">
                <div id="status">
                  <p>Situação: </p>
                  <p>Em Andamento</p>
                </div>
              </div>
              <div id="bar">
                  <div id="progress"></div>
              </div>
              <div id="dates">
                <p>De:20/20/2020</p>
                <p>Até:20/20/2020</p>
              </div>
          </a>  
          <a href="projetos/popUp" id="card">
            <div id="barStatus"> 
            </div>
              <p id="secao"> 0000 - SEÇÃO XYZ</p>
              <p id="title">0000 - PROJETO AAAAAAAA</p>
              <div id="hold_hours">
                <div id="hours">
                  <p id="info">TOTAL:</p>
                  <p id="info">1600h</p>
                </div>
                <div id="hours">
                  <p id="info">APONTADAS:</p>
                  <p id="info">800h</p>
                </div>
              </div>
              <div id="situation">
                <div id="status">
                  <p>Situação: </p>
                  <p>Em Andamento</p>
                </div>
              </div>
              <div id="bar">
                  <div id="progress"></div>
              </div>
              <div id="dates">
                <p>De:20/20/2020</p>
                <p>Até:20/20/2020</p>
              </div>
          </a>
          <a href="projetos/popUp" id="card">
            <div id="barStatus"> 
            </div>
              <p id="secao"> 0000 - SEÇÃO XYZ</p>
              <p id="title">0000 - PROJETO AAAAAAAA </p>
              <div id="hold_hours">
                <div id="hours">
                  <p id="info">TOTAL:</p>
                  <p id="info">1600h</p>
                </div>
                <div id="hours">
                  <p id="info">APONTADAS:</p>
                  <p id="info">800h</p>
                </div>
              </div>
              <div id="situation">
                <div id="status">
                  <p>Situação: </p>
                  <p>Em Andamento</p>
                </div>
              </div>
              <div id="dates">
                <p>De:20/20/2020</p>
                <p>Até:20/20/2020</p>
              </div>
          </a>
        </div>
      </Cards>

      <Container>
    <div id="popup">
      <div id="sideA">
        <div>
          <p id="secao"> 0000 - SEÇÃO XYZ</p>
          <p id="title">0000 - PROJETO AAAAAAAA</p>
        </div>
        <div id="titles">
          <p > INFORMAÇÕES GERAIS:</p>
        </div>
        <div id="responsible">
          <p > GESTOR RESPONSÁVEL:</p>
          <p >FORNECEDOR:</p>
        </div>
        <div id="objetivo">
          <p > OBJETIVO:</p>
          <p >	Lorem ipsum himenaeos sollicitudin mi sodales ullamcorper, vulputate eu a nullam 
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
        </div>
        <div id="grid">
          <div className="box one"></div>
          <div className="box two"></div>
          <div className="box three"></div>
          <div className="box four"></div>
          <div className="box five"></div>
        </div>
      </div> 
      <div id= "sideB">
        <button onClick={closeModal}><BsX id="x"/></button>
        <div id="titles">
          <p>HORAS:</p>
        </div>
        <div id="hoursAppointment">
          <div id="graphic">
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
          </div>
          <div id="hours">
            <p id="title">TOTAL:
            <span id="info">1600h</span> 
            </p> 
            <p id="title">APONTADAS:
            <span id="info">800h</span>
            </p>
          </div>
        </div>
        <div id="table">
          <table>
            <thead>
              <tr>
                <td id="header1">SKILL</td>
                <td id="header2">HORAS APONTADAS</td>
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
        </div>
        <div id="status">
          <button id="btn" onClick={ContainerFunc}>
            CONSULTORES ALOCADOS
          </button>
          <span id='estado'>
            EM ANDAMENTO
          </span>
        </div>     
      </div>
      <div id="sideC">
        <div id="tabela">
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
        </div>
      </div>
    </div>
    </Container>
    </>
  )
};

export default Home;