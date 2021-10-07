import React, { useEffect, useState } from "react";
import { Container, PopUpInfo, Content, Skills, HoldContent, PopUpTable } from "./style";
import { HiUserCircle } from "react-icons/hi";
import { BsX } from "react-icons/bs";
import Grid from "../Grid";
import api from "../../services/api";

interface Consultores{
id: number,
nome: string,
status: string,
usuario: {
  email: string,
},
projetos: [
  {
    id: number,
    nome: string,
    status: string,
  }
]
alocacoes: [
  {
  skill: {
    nome: string,
  },
  }
]
}

interface Consultor {
  id: number,
  showPopup: (arg0: boolean) => void,
}

const Popup: React.FC<Consultor> = ({id, showPopup} ) => {

  const [consultor, setConsultor] = useState<Consultores>();

  useEffect(() => {
    api.get(`/consultores/${id}`).then((response) => {
      setConsultor(response.data)
    })
  }, [consultor, setConsultor, id]);
  
  const handleClosePopup = () => {
    showPopup(false);
  }

    return(
        <>
        { consultor && 
          <Container show={!!showPopup}>
            <div id="hold">
            <button onClick={handleClosePopup}><BsX/></button>
            <PopUpInfo>
              <header>
                <HiUserCircle/>
                <div id="EmployeeInformation">
                    <h1>{consultor.id} - {consultor.nome}</h1>
                    <p>E-mail: {consultor.usuario.email}</p>
                </div>
              </header>
            </PopUpInfo>
            <Content>
              <Skills>
                <h5>SKILLS</h5>
                <HoldContent>
                    {consultor.alocacoes.map((alocacao => (
                      alocacao.skill.nome
                    )))}
                </HoldContent>
              </Skills>
              <PopUpTable>
                <table>
                  <thead>
                    <tr>
                      <td>NÚMERO</td>
                      <td>STATUS</td>
                      <td>PROJETO</td>
                    </tr>
                  </thead>
                  <tbody>
                    {consultor.projetos.map((projeto => (
                      <tr key={projeto.id}>
                      <td>{projeto.id}</td>
                      <td>{projeto.status}</td>
                      <td>{projeto.nome}</td> 
                    </tr>
                      )))}
                  </tbody>
                </table>
              </PopUpTable>
            </Content>
            <div id="grid"> 
              <Grid/>
            </div>
            </div>
          </Container>
        }
        </>
    )
}

export default Popup;