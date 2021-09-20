import React, { useCallback, useState } from "react";
import { Container } from './style';
import logo from "../../imgs/logo-weg.svg";
import bandeiraBrasil from "../../imgs/bandeiraBrasil.svg";
import { Link } from "react-router-dom";
import bandeiraEspanha from "../../imgs/espanha.svg";
import bandeiraEUA from "../../imgs/estados-unidos-da-america.svg";

const Header: React.FC = ({children,...props}) => {

    const [showDropdown, setShowDropDown] = useState(true);

    const handleShowDropdown = useCallback(() => {
      if(!!showDropdown === false) {
        setShowDropDown(true);    
      }else {
        setShowDropDown(false);    
      }
    }, [showDropdown, setShowDropDown]); 
    
    return(
    <Container ShowDropdown={!!showDropdown} {...props}> 
        <div id="name">
            <Link to="/home"><img src={logo} alt=""/></Link>
            {children}
        </div>   
        <div id="flagExit">
            <div onClick={handleShowDropdown} >
                <img src={bandeiraBrasil} alt=""/>
                <Link to="/"><p id="sair">Sair</p></Link>
                <div id="dropdown">
                    <div>
                    <img src={bandeiraEspanha} alt=""/> 
                        <p>Español</p> 
                    </div>
                    <div>
                    <img src={bandeiraEUA} alt=""/> 
                        <p>English</p> 
                    </div>
                    <div>
                    <img src={bandeiraBrasil} alt=""/> 
                        <p>Português do Brasil</p> 
                    </div>
                    
                </div>
            </div>
            
        </div>
    </Container>
    )
}

export default Header;