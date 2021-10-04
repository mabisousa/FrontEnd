import React, { useCallback, useState } from "react";
import { Container } from './style';
import logo from "../../imgs/logo-weg.svg";
import { IoSettingsSharp } from "react-icons/io5";
import switchThemeDark from "../../imgs/Vector.svg";
import switchThemeLight from "../../imgs/switch.svg";
import font from "../../imgs/fonte-do-texto.svg";
import bandeiraBrasil from "../../imgs/bandeiraBrasil.svg";
import { Link, useHistory } from "react-router-dom";
import bandeiraEspanha from "../../imgs/espanha.svg";
import bandeiraEUA from "../../imgs/estados-unidos-da-america.svg";
import increaseFont from "../../imgs/aumentarFonte.svg";
import decreaseFont from "../../imgs/diminuirFonte.svg";
import diminuir from "../../js/decrease";
import aumentar from "../../js/increase";

const Header: React.FC = ({children,...props}) => {
  
    const [showDropdown, setShowDropDown] = useState(true);
    const [showIdioms, setShowIdioms] = useState(true);
    const [showFonts, setShowFonts] = useState(true);
    const [showTheme, setShowTheme] = useState(true);

    const history = useHistory();
    const handleShowDropdown = useCallback(() => {
      if(!!showDropdown === false) {
        setShowDropDown(true);    
      }else {
        setShowDropDown(false);    
      }
    }, [showDropdown, setShowDropDown]); 

   

    const handleShowIdioms = useCallback(() => {
      if(!!showIdioms === false) {
        setShowIdioms(true);    
      }else {
        setShowIdioms(false);    
      }
    }, [showIdioms, setShowIdioms]); 

    const handleShowFont = useCallback(() => {
        if(!!showFonts === false) {
            setShowFonts(true);    
        }else {
            setShowFonts(false);    
        }
      }, [showFonts, setShowFonts]); 

    
      const handleChangeTheme = useCallback(() => {
        if(!!showTheme === false) {
          setShowTheme(true);    
        }else {
          setShowTheme(false);     
        }
      }, [showTheme, setShowDropDown]);
    
      const exitSystem = () => {
        localStorage.removeItem("@WEGusers:token");
        localStorage.removeItem("@WEGusers:usuario");

        history.push("/")
      }
    return(
      
      <Container  changeTheme={showTheme} showFonts={!!showFonts} showIdioms={!!showIdioms} ShowDropdown={!!showDropdown} {...props}> 
          <div id="name">
              <Link to="/home"><img src={logo} alt=""/></Link>
              {children}
          </div>   
          <div id="exit">
            <div onClick={handleShowDropdown} >
              <IoSettingsSharp />
            </div> 
            <p id="sair" onClick={exitSystem}>Sair</p>
              <div id="dropdown">
                <div onClick={handleShowIdioms}>
                  <img src={bandeiraBrasil} alt=""/> 
                  <p>Idioma</p>          
                </div>
                <div id="idioms">
                  <div className="border">
                    <img src={bandeiraEspanha} alt=""/> 
                    <span>Español</span> 
                  </div>
                  <div className="border">
                      <img src={bandeiraEUA} alt=""/> 
                      <span>English</span> 
                  </div>
                  <div>
                    <img src={bandeiraBrasil} alt=""/> 
                    <span>Português do Brasil</span> 
                  </div>    
                </div>
                <div onClick={handleShowFont}>
                  <img src={font} alt=""/> 
                  <p>Fonte</p> 
                </div>
                <div id="fonts">
                  <div onClick={() => aumentar()} className="border">
                    <img src={increaseFont} alt=""/> 
                    <span>Aumentar fonte</span> 
                  </div>
                  <div onClick={() => diminuir()}>
                    <img src={decreaseFont} alt=""/> 
                    <span>Diminuir fonte</span> 
                  </div>   
                </div>
                <div onClick={handleChangeTheme}>
                  <img src={switchThemeDark} id="switchThemeDark"/> 
                  <img src={switchThemeLight} id="switchThemeLight"/> 
                  <p>Tema</p> 
                </div> 
              </div>
          </div>
      </Container>
    )
}

export default Header;