import React from "react";
import { Container } from './style'
import folder from '../../assets/folder.svg';
import clock from '../../assets/clock.svg';
import group from '../../assets/group.svg';
import { Link } from 'react-router-dom'
import { i18n } from "../../translate/i18n";

const Menu: React.FC = () => (
  <Container>
    <Link to="home">
      <div>
        <img src={ folder } alt=""/>
        <h1>{i18n.t('menu.projects')}</h1>
      </div>
    </Link>
    <Link to="aprovacao">
      <div>
        <img src={ clock } alt=""/>
        <h1>{i18n.t('menu.approval')}</h1>
      </div>
    </Link>
    <Link to="consultores">
      <div>
        <img src={ group } alt=""/>
        <h1>{i18n.t('menu.consultants')}</h1>
      </div>
    </Link>
  </Container>
)

export default Menu;