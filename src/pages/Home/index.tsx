import React, { useCallback, useEffect, useState } from 'react';
import { Cards, Card, TitleSection, TitleProject, HoldHours, Hours, Status, Date, Title, Form, Filters, Filter} from './style';
import Profile from "../../components/Profile";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import { IoIosArrowDown } from 'react-icons/io';
import display1 from '../../imgs/display1.svg';
import display2 from '../../imgs/display2.svg';
import api from "../../services/api"
import Popup from "../../components/PopupProjetos"

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
}

const Home: React.FC = () => {

  const [projetos, setProjeto] = useState<Projetos[]>([]);
  const [showPopup, setShowPopup] = useState(false);

  const [show, setShow] = useState(false);

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

  useEffect(() => {
    api.get("/projetos").then((response) => {
      setProjeto(response.data)
    })
  }, []);

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
        <Card Show={!!show} color="#EBB93A" onClick={() => setShowPopup(!showPopup)} key={projeto.id}>
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
      {showPopup && 
        <Popup/>
      }
    </>
  )
};

export default Home;