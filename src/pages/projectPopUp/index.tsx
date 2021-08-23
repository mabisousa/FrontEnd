import React from 'react';
import { Container } from './styles';
import { Chart } from "react-google-charts";
import { BsX } from 'react-icons/bs';
import { ContainerFunc } from './popup.js';


const popUp: React.FC = () => {
  return (
    <>
    <Container>
    <div id="container">
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
        <BsX id="x"/>
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

export default popUp;