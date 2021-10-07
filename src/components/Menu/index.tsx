import React from "react";
import { Container } from './style'
import folder from '../../assets/folder.svg';
import clock from '../../assets/clock.svg';
import group from '../../assets/group.svg';
import { Link } from 'react-router-dom'

const Menu: React.FC = () => (
    <Container>
        <Link to="home">
            <div>
                <img src={ folder } alt=""/>
                <h1>Projetos</h1>
            </div>
        </Link>
        <Link to="aprovacao">
            <div>
                <img src={ clock } alt=""/>
                <h1>Aprovação</h1>
            </div>
        </Link>
        <Link to="consultores">
            <div>
                <img src={ group } alt=""/>
                <h1>Consultores</h1>
            </div>
        </Link>
    </Container>
)

export default Menu;