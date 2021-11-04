import React, { useEffect, useState } from "react";

import { Container, InfoPopUp, Conteudo, Habilidades, SeguraConteudo, TabelaPopUp } from "./style";

import { BsX } from "react-icons/bs";
import { PersonCircle } from "react-bootstrap-icons";

import api from "../../services/api";
import Grid from "../Grid";

import { i18n } from "../../translate/i18n";

interface Consultores{
  idConsultor: number,
  consultorNome: string,
  consultorStatus: string,
  consultorValorHora: number,
  usuario: {
    email: string,
  },
  consultorAlocacoes: [
    {
      projeto: {
        id: number,
        projetoNome: string,
        projetoStatus: string,
      }
      skill: {
        skillNome: string,
      }
    }
  ],
  horasTotais: number,
  horasTrabalhadas: number
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
        <Container mostrar={!!mostrarPopup}>
          <div id="hold">
            <button onClick={handleFecharPopup}>
              <BsX/>
            </button>
            <InfoPopUp>
              <header>
                <PersonCircle/>
                <div id="EmployeeInformation">
                  <h1>
                    {consultor.consultorNome} - {consultor.idConsultor} 
                  </h1>
                  <p>
                    {i18n.t('ConsultantPopup.email')}  {consultor.usuario.email}
                  </p>
                </div>
              </header>
            </InfoPopUp>
            <Conteudo>
              <Habilidades>
                <h5>
                  {i18n.t('ConsultantPopup.skills')}
                </h5>
                <SeguraConteudo>

                  {consultor.consultorAlocacoes.map((alocacao => (
                    alocacao.skill.skillNome
                  )))}  
                </SeguraConteudo>
              </Habilidades>
              <TabelaPopUp>
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
                    {consultor.consultorAlocacoes.map((alocacao => (
                      <tr key={alocacao.projeto.id}>
                      <td>
                        {alocacao.projeto.id}
                      </td>
                      <td>
                        {alocacao.projeto.projetoStatus}
                      </td>
                      <td>
                        {alocacao.projeto.projetoNome}
                      </td> 
                    </tr>
                      )))}
                  </tbody>
                </table>
              </TabelaPopUp>
            </Conteudo>
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