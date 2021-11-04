import React, { useState, useEffect, useCallback } from 'react';

import { Container, Tr } from './style';

import Popup from "../ConsultantPopup";
import api from "../../services/api";

import { i18n } from '../../translate/i18n';

interface Consultores{
  id: number,
  nome: string,
  status: string,
  projetos: string
}

interface Consultor {
  status: string
}

const TabelaConsultor: React.FC<Consultor> = ({status}) => {
  const [mostrarPopup, setMostrarPopup] = useState(false);
  const [consultor, setConsultor] = useState<Consultores[]>([]);
  const [consulta, setConsulta] = useState<Consultores>();

  const handleMostrarPopup = (mostrarPop: boolean) => {
    setMostrarPopup(mostrarPop);
  }

  const handleAbrirPopup = useCallback((id: number) => {
    setMostrarPopup(!mostrarPopup);
    setConsulta(consultor[id-1]);

  },[consultor, setConsulta, setMostrarPopup, mostrarPopup]);

  useEffect(() => {
    if(status !== 'Todos'){
      api.get(`/consultores/status/${status}`).then((response) => {
        setConsultor(response.data)
      })
    } else {
      api.get(`/consultores`).then((response) => {
        setConsultor(response.data);
      })
    }
  }, [consultor, setConsultor, status]);
  
  return (
    <> 
      { consultor &&
        <Container>
          <table>
            <thead>
              <tr>
                <td>
                  {i18n.t('ConsultantTable.registration')}
                </td>
                <td>
                  {i18n.t('ConsultantTable.name')}
                </td>
                <td>
                  {i18n.t('ConsultantPopup.status')}
                </td>
                <td>
                  {i18n.t('projects.titleHeader')}
                </td>
                <td>
                  {i18n.t('ConsultantTable.details')}
                </td>
              </tr>
            </thead>
            <tbody>
              {consultor.map((consultant) => (
                <Tr color={consultant.status}>
                  <td>
                    {consultant.id}
                  </td>
                  <td>
                    {consultant.nome}
                  </td>
                  <td>
                    {consultant.status}
                  </td> 
                  <td>
                    {consultant.projetos.length}
                  </td>
                  <button onClick={() => handleAbrirPopup(consultant.id)} key={consultant.id}>
                    <td> + </td>
                  </button>
                </Tr>
              ))}
            </tbody>
          </table>
        </Container>
      } 
        
      { mostrarPopup && consulta &&
        <Popup id={consulta.id} mostrarPopup={handleMostrarPopup}/>
      }
    </>
  )
};

export default TabelaConsultor;
