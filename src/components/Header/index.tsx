import React from "react";
import { Container } from './style'
import logo from "../../imgs/logo-weg.svg"
import bandeiraBrasil from "../../imgs/bandeiraBrasil.svg"
import { Link } from "react-router-dom";

const Header: React.FC = ({children,...props}) => (
    <Container {...props}> 
        <div id="name">
            <Link to="/projetos"><img src={logo} /></Link>
            {children}
        </div>   
        <div id="flagExit">
            <img src={bandeiraBrasil} /> 
            <Link to="/"><p>Sair</p></Link>
        </div>
    </Container>
)

export default Header;