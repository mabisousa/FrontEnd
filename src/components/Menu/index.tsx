import React from "react";
import { Link } from 'react-router-dom';

import { Container } from './style'

import pasta from '../../assets/pasta.svg';
import relogio from '../../assets/relogio.svg';
import grupo from '../../assets/grupo.svg';
import { BsList } from "react-icons/io";

import { i18n } from "../../translate/i18n";

const Menu: React.FC = () => (
  <Container>
    <Link to="home">
      <div>
        <img src={ pasta } alt=""/>
        <h1>
          {i18n.t('menu.projetos')}
        </h1>
      </div>
    </Link>
    <Link to="aprovacao">
      <div>
        <img src={ relogio } alt=""/>
        <h1>
          {i18n.t('menu.aprovacao')}
        </h1>
      </div>
    </Link>
    <Link to="consultores">
      <div>
        <img src={ grupo } alt=""/>
        <h1>
          {i18n.t('menu.consultores')}
        </h1>
      </div>
    </Link>
    <Link to="listagem">
      <div>
        <BsList/>
        <h1>
          Listagem
        </h1>
      </div>
    </Link>
  </Container>
)

export default Menu;