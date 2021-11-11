import React, { useEffect, useState } from "react";

import { Container, InfoPopUp, Conteudo, Habilidades, SeguraConteudo, TabelaPopUp } from "./style";

import { BsX } from "react-icons/bs";
import { PersonCircle } from "react-bootstrap-icons";

import api from "../../services/api";
import Grade from "../Grade";

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
          <div id="segura">
            <button onClick={handleFecharPopup}>
              <BsX/>
            </button>
            <InfoPopUp>
              <header>
                <PersonCircle/>
                <div>
                  <h1>
                    {consultor.consultorNome} - {consultor.idConsultor} 
                  </h1>
                  <p>
                    {i18n.t('consultorPopup.email')}  {consultor.usuario.email}
                  </p>
                </div>
              </header>
            </InfoPopUp>
            <Conteudo>
              <Habilidades>
                <h5>
                  {i18n.t('consultorPopup.habilidades')}
                </h5>
                <SeguraConteudo>
                  {consultor.consultorAlocacoes.map((alocacao => (
                    <p>
                      {alocacao.skill.skillNome}
                    </p>
                  )))} 
                </SeguraConteudo>
              </Habilidades>
              <TabelaPopUp>
                <table>
                  <thead>
                    <tr>
                      <td>
                        {i18n.t('consultorPopup.numero')}
                      </td>
                      <td>
                        {i18n.t('consultorPopup.status')}
                      </td>
                      <td>
                        {i18n.t('consultorPopup.projeto')}
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
            <div id="grade"> 
              <Grade/>
            </div>
          </div>
        </Container>
      }
    </>
  )
}

export default PopupConsultor;