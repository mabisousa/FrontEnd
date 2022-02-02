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
  
  
  return(
    <Container {...props}>
      <div>
        <div id="perfil">
          <FaUser/>
          <div id="txt">
            <h2>
              {  i18n.t('aprovacao.responsavel')}
            </h2>
                <p>Fornecedor</p>
                
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