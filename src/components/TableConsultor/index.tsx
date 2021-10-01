import React, { useState, useEffect, useCallback } from 'react';
import { Container, Tr } from './style';
import api from "../../services/api";
import Popup from "../../components/PopupConsultor"

interface Consultores{
  id: number,
  nome: string,
  status: string,
  projetos: string
}

const Login: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [consultor, setConsultor] = useState<Consultores[]>([]);
  const [consult, setConsult] = useState<Consultores>();


  const handleShow = (showPop: boolean) => {
    setShowPopup(showPop);
  }

  const openPopup = useCallback((id: number) => {
    setShowPopup(!showPopup);
    
    setConsult(consultor[id-1]);

  },[consultor, consult, setConsult, setShowPopup, showPopup]);

  useEffect(() => {
    api.get("/consultores").then((response) => {
      setConsultor(response.data);
    })
  }, [consultor, setConsultor]);
  
  return (
    <> 
      { consultor &&
        <Container>
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
            {consultor.map((consultor) => (
              <Tr color={consultor.status}>
                <td>{consultor.id}</td>
                <td>{consultor.nome}</td>
                <td>{consultor.status}</td> 
                <td>{consultor.projetos.length}</td>
                <button onClick={() => openPopup(consultor.id)} key={consultor.id}><td> + </td></button>
              </Tr>
            ))}
          </tbody>
          </table>
        </Container>
      } 
        
      {showPopup && consult &&
        <Popup id={consult.id} showPopup={handleShow}/>
      }
    </>
)};

export default Login;
