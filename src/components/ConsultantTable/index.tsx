import React, { useState, useEffect, useCallback } from 'react';
import { Container, Tr } from './style';
import api from "../../services/api";
import Popup from "../ConsultantPopup"

interface Consultores{
  id: number,
  nome: string,
  status: string,
  projetos: string
}

interface Consultor {
  status: string
}

const Login: React.FC<Consultor> = ({status}) => {
  const [showPopup, setShowPopup] = useState(false);
  const [consultant, setConsultant] = useState<Consultores[]>([]);
  const [consult, setConsult] = useState<Consultores>();

  const handleShowPopup = (showPop: boolean) => {
    setShowPopup(showPop);
  }

  const handleOpenPopup = useCallback((id: number) => {
    setShowPopup(!showPopup);
    
    setConsult(consultant[id-1]);

  },[consultant, consult, setConsult, setShowPopup, showPopup]);

  useEffect(() => {
    if(status !== 'Todos'){
      api.get(`/consultores/status/${status}`).then((response) => {
        setConsultant(response.data)
        console.log(consultant)
      })
    } else {
      api.get(`/consultores`).then((response) => {
        setConsultant(response.data);
      })
    }
  }, [consultant, setConsultant, status]);
  
  return (
    <> 
      { consultant &&
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
            {consultant.map((consultant) => (
              <Tr color={consultant.status}>
                <td>{consultant.id}</td>
                <td>{consultant.nome}</td>
                <td>{consultant.status}</td> 
                <td>{consultant.projetos.length}</td>
                <button onClick={() => handleOpenPopup(consultant.id)} key={consultant.id}><td> + </td></button>
              </Tr>
            ))}
          </tbody>
          </table>
        </Container>
      } 
        
      {showPopup && consult &&
        <Popup id={consult.id} showPopup={handleShowPopup}/>
      }
    </>
)};

export default Login;
