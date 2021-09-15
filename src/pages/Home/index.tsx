import React, { useCallback, useEffect, useState } from 'react';
import { Cards, Card, TitleSection, TitleProject, HoldHours, Hours, Status, Date, Title, Form, Filters, Filter, Container, TitlePopUp, InfosPopup, InfosGerais, Objetivo, Horas, HorasApontadas, Skills, Table, ConsultoresAlocados, DetailsPopup} from './style';
import Profile from "../../components/Profile";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import { IoIosArrowDown } from 'react-icons/io';
import display1 from '../../imgs/display1.svg';
import display2 from '../../imgs/display2.svg';
import api from "../../services/api"
import Popup from "../../components/PopupProjetos"
import Chart from 'react-google-charts';
import { BsX } from 'react-icons/bs';
import Grid from '../../components/Grid';

interface Projetos{
  id: number,
  secao: string,
  nome: string,
  descricao: string,
  consultores: [{
    id: number,
    nome: string,
    skill: string
  }],
  status: string,
  dataInicio: string,
  dataFim: string,
  horasApontadas: number,
  horasTotal: number,
  apontamentos: [{
    alocacao: {
      skill:string,
    },
    horasTrabalhadas: number,
    situacaoApontamento: string,
  }]
}

const Home: React.FC = () => {

  const [isOpen, setOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [projetos, setProjeto] = useState<Projetos[]>([]);
  const [show, setShow] = useState(false);
  const [projetopopup, setPopup] = useState<Projetos>();

  useEffect(() => {
    api.get("/projetos").then((response) => {
      setProjeto(response.data)
    })
  }, []);

  const handleOpen = useCallback(() => {
      if(!!isOpen === false) {
        setOpen(true);    
      } else {
        setOpen(false);    
      }
    }, [isOpen, setOpen]);

  const openPopup = useCallback((id) => {
    setShowPopup(!showPopup);

    
    setPopup(projetos[id-1]);
    console.log(projetopopup?.apontamentos)
    
  },[showPopup, setShowPopup, projetos]);
  
  const handleShow = useCallback(() => {
    if(!!show === false) {
      setShow(true);    
    }
  }, [show, setShow]);

  const handleNotShow = useCallback(() => {
    if(!!show !== false) {
      setShow(false);    
    }
  }, [show, setShow]);

  

  return (
    <>
      <Header>
        <p>PROJETOS</p>
      </Header>
      
      <Profile/>
      <Menu/>
      <Filters>
        <div>
            <Title>
              PROJETOS ALOCADOS
            </Title>
            <div>
                <Filter>
                    <Form >
                        <label>Projeto:</label>
                        <input type="text" placeholder="Digite aqui... "/>
                    </Form>
                    <p>Seção:</p>
                    <div>
                        <span>Todos</span>
                        <IoIosArrowDown id="img" size={17}/>
                    </div>
                    <p>Status:</p>
                    <div>
                        <span>Todos</span>
                        <IoIosArrowDown id="img" size={17}/>
                    </div>
                </Filter>
                <button onClick={handleShow}><img src={display1} alt=""/></button>
                <button onClick={handleNotShow}><img src={display2} alt=""/></button>
            </div> 
        </div>
      </Filters>
      <Cards > 
      {projetos.map((projeto) => (
        <Card Show={!!show} color="#EBB93A" onClick={() => openPopup(projeto.id)} key={projeto.id}>
          <TitleSection Show={!!show}>000 - {projeto.secao}</TitleSection>
          <TitleProject Show={!!show}>{projeto.id} - {projeto.nome} </TitleProject>
          <HoldHours Show={!!show}>
            <Hours Show={!!show}>
              <p>Total:</p>
              <p>{projeto.horasTotal}</p>
            </Hours>
            <Hours Show={!!show}>
              <p>Apontadas:</p>
              <p>{projeto.horasApontadas}</p>
            </Hours>
          </HoldHours>
          <Status Show={!!show}>
            <p>Situação: </p>
            <p>{projeto.status}</p>
          </Status>
          <Date Show={!!show}>
            <p>De: {projeto.dataInicio}</p>
            <p>Até: {projeto.dataFim}</p>
          </Date>
        </Card>
      ))}
      </Cards>
      {showPopup && projetopopup && 
        <Container Open={!!isOpen}  show={!!showPopup}>
        <div id="hold">
          <button onClick={() => openPopup(1)}><BsX/></button>
          <TitlePopUp>
            <h2> 0000 - {projetopopup.secao}</h2>
            <h1>0000000 - {projetopopup.nome}</h1>
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
                {projetopopup.descricao}
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
                    ['Apontada', 10],
                    ['Restante', 1]
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
                    <span>{projetopopup.horasTotal}</span> 
                  </p> 
                  <p>APONTADAS:
                    <span>{projetopopup.horasApontadas}</span>
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
                {projetopopup.consultores.map((consultor) => {
                  <tr>
                  <td>{consultor.id}</td>
                  <td>{consultor.nome}</td>
                </tr>
                })}
                </tbody>
              </table>
            </ConsultoresAlocados>
          </InfosPopup>
          <DetailsPopup>
            <Grid/>
            <h1>{projetopopup.status}</h1>
          </DetailsPopup>
        </div>
      </Container>
      }
    </>
                
  ) 
};

export default Home;