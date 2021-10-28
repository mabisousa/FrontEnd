import React, { useEffect, useState } from "react";

import { Container, PopUpInfo, Content, Skills, HoldContent, PopUpTable } from "./style";

import { HiUserCircle } from "react-icons/hi";
import { BsX } from "react-icons/bs";

import api from "../../services/api";
import Grid from "../Grid";

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
  mostrarPopup: (arg0: boolean) => void,
}

const PopupConsultor: React.FC<Consultor> = ({id, mostrarPopup} ) => {

  const [consultor, setConsultor] = useState<Consultores>();

  useEffect(() => {
    api.get(`/consultores/${id}`).then((response) => {
      setConsultor(response.data)
    })
  }, [consultor, setConsultor, id]);
  
  const handleFecharPopup = () => {
    mostrarPopup(false);
  }

  return (
    <>
      { consultor && 
        <Container show={!!mostrarPopup}>
          <div id="hold">
            <button onClick={handleFecharPopup}>
              <BsX/>
            </button>
            <PopUpInfo>
              <header>
                <HiUserCircle/>
                <div id="EmployeeInformation">
                  <h1>
                    {consultor.nome} - {consultor.id} 
                  </h1>
                  <p>
                    {i18n.t('ConsultantPopup.email')}  {consultor.usuario.email}
                  </p>
                </div>
              </header>
            </PopUpInfo>
            <Content>
              <Skills>
                <h5>
                  {i18n.t('ConsultantPopup.skills')}
                </h5>
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
                      <td>
                        {i18n.t('ConsultantPopup.number')}
                      </td>
                      <td>
                        {i18n.t('ConsultantPopup.status')}
                      </td>
                      <td>
                        {i18n.t('ConsultantPopup.project')}
                      </td>
                    </tr>
                  </thead>
                  <tbody>
                    {consultor.projetos.map((projeto => (
                      <tr key={projeto.id}>
                      <td>
                        {projeto.id}
                      </td>
                      <td>
                        {projeto.status}
                      </td>
                      <td>
                        {projeto.nome}
                      </td> 
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

export default PopupConsultor;