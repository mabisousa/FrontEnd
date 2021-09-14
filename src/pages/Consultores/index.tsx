import React, { useState, useEffect, useCallback } from 'react';
import { Filters, Title, Form, Consultores } from './style';
import Profile from "../../components/Profile";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import api from "../../services/api";
import Popup from "../../components/PopupConsultor";

interface Consultor{
  id: number;
  nome: string;
  status: string
  projetos: [
    {
      id: number
    }
  ]
  }

const Login: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [consultores, setConsultor] = useState<Consultor[]>([]);
  const [consult, setConsult] = useState<Consultor>();
  const openPopup = useCallback((id: number) => {
    setShowPopup(!showPopup);
    
    setConsult(consultores[id]);
  },[consultores]);

  useEffect(() => {
    api.get("/consultores").then((response) => {
      setConsultor(response.data);
    })
  }, [consultores, setConsultor]);
  
  return (
    <>  
      <Header>
        <p>CONSULTORES</p>
      </Header>
      <Profile/>
      <Menu/>
      <main>
        <Filters>
          <div>
            <Title>CONSULTORES</Title>
              <div id="filter">
                <Form>
                  <label>Nome:</label>
                  <input placeholder="Digite aqui..." />
                </Form>
              </div>
          </div>
        </Filters>

        <Menu/>
        
        <Consultores>
        <table>
        <thead>
          <tr>
            <td>CADASTRO</td>
            <td>NOME</td>
            <td>STATUS</td>
            <td>PROJETOS</td>
            <td>DETALHES</td>
          </tr>
        </thead>
          <tbody>
            {consultores.map((consultor) => (
              <>
              <tr>
                <td>{consultor.id}</td>
                <td>{consultor.nome}</td>
                <td>{consultor.status}</td> 
                <td>{consultor.projetos.length}</td>
                <button onClick={() => openPopup(consultor.id)} id="button"><td> + </td></button>
              </tr>
              {showPopup &&
                <Popup consultor={consult}/>
              }
              </>
            ))}
          </tbody>
        </table>
        </Consultores>
      </main>
      
      
    </>
)};

export default Login;
