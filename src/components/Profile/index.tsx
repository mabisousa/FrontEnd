import React, { HTMLAttributes } from "react";

import { Container } from './style'

import Notification from '../Notification'

import { FaUser } from 'react-icons/fa';
import { i18n } from "../../translate/i18n";

type ProfileProps  = HTMLAttributes<HTMLDivElement>;

const Profile: React.FC<ProfileProps> = (props) => {

  let value = localStorage.getItem("@WEGusers:responsavel")
  let responsavel!: { idResponsavel: number; responsavelNome: string };

  if(value) {
    responsavel = JSON.parse(value);
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
        <div id="notifications">
          <h3>
            Notificações
          </h3>
          <div id="hold">
            <Notification/>
            <Notification/>
            <Notification/>
            <Notification/>
            <Notification/>
            <Notification/>
            <Notification/>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Profile;