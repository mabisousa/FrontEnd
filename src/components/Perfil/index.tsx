import React, { HTMLAttributes, useEffect, useState } from "react";

import { Container } from './style'

import Notificacoes from '../Notificacoes'

import { FaUser } from 'react-icons/fa';
import { i18n } from "../../translate/i18n";
import api from "../../services/api";

type ProfileProps  = HTMLAttributes<HTMLDivElement>;

interface Responsavel {
  responsavelNome: string,
}
interface Consultor {
  consultorNome: string,
}
const Perfil: React.FC<ProfileProps> = (props) => {
  
  const [responsavel, setResponsavel] = useState<Responsavel>();
  const [consultor,setConsultor] = useState<Consultor>();

  let infos = localStorage.getItem("@WEGusers:usuario")
  let user!: { email: string, roles: [{ roleNome: string }] };;
  
  if(infos) {
     user = JSON.parse(infos);
  }
  useEffect(()=> {
    user.roles.map(role => {
      if(role.roleNome === "ROLE_FORNECEDOR") {
        api.get(`fornecedores/responsaveis/${user.email}`).then((response) => {
          setResponsavel(response.data);
        })
      } else if(role.roleNome === "ROLE_CONSULTOR") {
        api.get(`consultores/email/${user.email}`).then((response) => {
         setConsultor(response.data);
        })
      }
    })
  },[])
  return(
    <Container {...props}>
      <div>
        <div id="perfil">
          <FaUser/>
          <div id="txt">
            <h2>
              {responsavel ? responsavel.responsavelNome :  i18n.t('aprovacao.responsavel')}
            </h2>
                {responsavel ? <p>Fornecedor</p>  : 
                consultor ? <p>Consultor</p> : <p>a</p> }
          </div>
        </div>
        <div id="notificacoes">
          <h3>
            Notificações
          </h3>
          <div id="segura">
            <Notificacoes/>
            <Notificacoes/>
            <Notificacoes/>
            <Notificacoes/>
            <Notificacoes/>
            <Notificacoes/>
            <Notificacoes/>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Perfil;