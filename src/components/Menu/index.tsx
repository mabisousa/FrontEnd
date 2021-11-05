import React from "react";
import { Link } from 'react-router-dom';

import { Container } from './style'

import folder from '../../assets/folder.svg';
import clock from '../../assets/clock.svg';
import group from '../../assets/group.svg';

import { i18n } from "../../translate/i18n";

const Menu: React.FC = () => (
  <Container>
    <Link to="home">
      <div>
        <img src={ folder } alt=""/>
        <h1>
          {i18n.t('menu.projetos')}
        </h1>
      </div>
    </Link>
    <Link to="aprovacao">
      <div>
        <img src={ clock } alt=""/>
        <h1>
          {i18n.t('menu.aprovacao')}
        </h1>
      </div>
    </Link>
    <Link to="consultores">
      <div>
        <img src={ group } alt=""/>
        <h1>
          {i18n.t('menu.consultores')}
        </h1>
      </div>
    </Link>
  </Container>
)

export default Menu;