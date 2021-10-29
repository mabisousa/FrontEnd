import React, { HTMLAttributes } from "react";

import { Container } from './style'

import Notification from '../Notification'

import { FaUser } from 'react-icons/fa';

type ProfileProps  = HTMLAttributes<HTMLDivElement>;

const Profile: React.FC<ProfileProps> = (props) => {
  
  return(
    <Container {...props}>
      <div>
        <div id="perfil">
          <FaUser/>
          <div id="txt">
            <h2>
              Nome
            </h2>
            <p>
              Atuação
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