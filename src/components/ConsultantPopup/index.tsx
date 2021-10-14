import React, { useEffect, useState } from "react";
import { Container, PopUpInfo, Content, Skills, HoldContent, PopUpTable } from "./style";
import { HiUserCircle } from "react-icons/hi";
import { BsX } from "react-icons/bs";
import Grid from "../Grid";
import api from "../../services/api";
import { i18n } from "../../translate/i18n";

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

const ConsultantPopup: React.FC<Consultor> = ({id, showPopup} ) => {

  const [consultant, setConsultant] = useState<Consultores>();

  useEffect(() => {
    api.get(`/consultores/${id}`).then((response) => {
      setConsultant(response.data)
    })
  }, [consultant, setConsultant, id]);
  
  const handleClosePopup = () => {
    showPopup(false);
  }

  return (
    <>
      { consultant && 
        <Container show={!!showPopup}>
          <div id="hold">
            <button onClick={handleClosePopup}><BsX/></button>
            <PopUpInfo>
              <header>
                <HiUserCircle/>
                <div id="EmployeeInformation">
                  <h1>{consultant.id} - {consultant.nome}</h1>
                  <p>{i18n.t('ConsultantPopup.email')}  {consultant.usuario.email}</p>
                </div>
              </header>
            </PopUpInfo>
            <Content>
              <Skills>
                <h5>{i18n.t('ConsultantPopup.skills')}</h5>
                <HoldContent>
                  {consultant.alocacoes.map((alocacao => (
                    alocacao.skill.nome
                  )))}
                </HoldContent>
              </Skills>
              <PopUpTable>
                <table>
                  <thead>
                    <tr>
                      <td>{i18n.t('ConsultantPopup.number')}</td>
                      <td>{i18n.t('ConsultantPopup.status')}</td>
                      <td>{i18n.t('ConsultantPopup.project')}</td>
                    </tr>
                  </thead>
                  <tbody>
                    {consultant.projetos.map((project => (
                      <tr key={project.id}>
                      <td>{project.id}</td>
                      <td>{project.status}</td>
                      <td>{project.nome}</td> 
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

export default ConsultantPopup;