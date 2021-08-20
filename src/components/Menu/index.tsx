import React from "react";
import { Container } from './style'
import folder from '../../imgs/folder.svg';
import clock from '../../imgs/clock.svg';
import group from '../../imgs/group.svg';
import { Link } from 'react-router-dom'

const Menu: React.FC = () => (
    <Container>
        <Link to="projetos">
            <div>
                <img src={ folder }/>
                <h1>Projetos</h1>
            </div>
        </Link>
        <Link to="aprovacao">
            <div>
                <img src={ clock }/>
                <h1>Aprovação</h1>
            </div>
        </Link>
        <Link to="consultores">
            <div>
                <img src={ group }/>
                <h1>Consultores</h1>
            </div>
        </Link>
    </Container>
)

export default Menu;