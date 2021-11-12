import React, { HTMLAttributes } from "react";

import { Container } from './style'

import Notificacoes from '../Notificacoes'

import { FaUser } from 'react-icons/fa';
import { i18n } from "../../translate/i18n";

type ProfileProps  = HTMLAttributes<HTMLDivElement>;

const Perfil: React.FC<ProfileProps> = (props) => {

  let valor = localStorage.getItem("@WEGusers:responsavel")
  let responsavel!: { idResponsavel: number; responsavelNome: string };

  if(valor) {
    responsavel = JSON.parse(valor);
  }

  return(
    <Container {...props}>
      <div>
        <div id="perfil">
          <FaUser/>
          <div id="txt">
            <h2>
              {responsavel ? responsavel.responsavelNome :  i18n.t('aprovacao.responsavel')}
            </h2>
            <p>
              Fornecedor
            </p>
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