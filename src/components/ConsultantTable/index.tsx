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

const ConsultantTable: React.FC<Consultor> = ({status}) => {
  const [showPopup, setShowPopup] = useState(false);
  const [consultant, setConsultant] = useState<Consultores[]>([]);
  const [consult, setConsult] = useState<Consultores>();
  const [darkMode] = useState(false);

  window.localStorage.getItem('Theme:darkMode')

  const handleShowPopup = (showPop: boolean) => {
    setShowPopup(showPop);
  }

  const handleOpenPopup = useCallback((id: number) => {
    setShowPopup(!showPopup);
    setConsult(consultant[id-1]);

  },[consultant, setConsult, setShowPopup, showPopup]);

  useEffect(() => {
    if(status !== 'Todos'){
      api.get(`/consultores/status/${status}`).then((response) => {
        setConsultant(response.data)
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
        <Container darkMode={darkMode}>
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
              {consultant.map((consultant) => (
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
                  <button onClick={() => handleOpenPopup(consultant.id)} key={consultant.id}>
                    <td> + </td>
                  </button>
                </Tr>
              ))}
            </tbody>
          </table>
        </Container>
      } 
        
      { showPopup && consult &&
        <Popup id={consult.id} showPopup={handleShowPopup}/>
      }
    </>
  )
};

export default ConsultantTable;
