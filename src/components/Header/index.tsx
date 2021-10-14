import React, { useCallback, useState } from "react";
import { Container } from './style';
import logo from "../../assets/logo.svg";
import { IoSettingsSharp } from "react-icons/io5";
import switchThemeDark from "../../assets/switchOn.svg";
import switchThemeLight from "../../assets/switchOff.svg";
import font from "../../assets/textFont.svg";
import bandeiraBrasil from "../../assets/brazilFlag.svg";
import { Link, useHistory } from "react-router-dom";
import decrease from "../../js/decrease";
import increse from "../../js/increase";
import bandeiraEspanha from "../../assets/spainFlag.svg";
import bandeiraEUA from "../../assets/usaFlag.svg";
import increaseFont from "../../assets/increaseFont.svg";
import decreaseFont from "../../assets/decreaseFont.svg";

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
  }, [showTheme]);
  
  const exitSystem = () => {
    localStorage.removeItem("@WEGusers:token");
    localStorage.removeItem("@WEGusers:usuario");

    history.push("/")
  }

  const handleChangeEn = () => {
    localStorage.setItem('i18nextLng', 'en-US');
    window.location = window.location
  }

  const handleChangePt = () => {
    localStorage.setItem('i18nextLng', 'pt-BR');
    window.location = window.location
  }

  const handleChangeEs = () => {
    localStorage.setItem('i18nextLng', 'es-ES');
    window.location = window.location
  }

  return( 
    <Container changeTheme={showTheme} showFonts={!!showFonts} showIdioms={!!showIdioms} showDropdown={!!showDropdown} {...props}> 
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
          <button onClick={handleShowIdioms}>
            <img src={bandeiraBrasil} alt=""/> 
            <p id="a">Idioma</p>          
          </button>
          <div id="idioms">
            <button  onClick={handleChangeEs} className="border">
              <img src={bandeiraEspanha} alt=""/> 
              <span >Español</span> 
            </button>
            <button onClick={handleChangeEn} className="border">
              <img src={bandeiraEUA} alt=""/> 
              <span>English</span> 
            </button>
            <button onClick={handleChangePt}>
              <img src={bandeiraBrasil} alt=""/> 
              <span>Português do Brasil</span> 
            </button>    
          </div>
          <button onClick={handleShowFont}>
            <img src={font} alt=""/> 
            <p >Fonte</p> 
          </button>
          <div id="fonts">
            <button  onClick={() => increse(window.getComputedStyle(document.body).getPropertyValue('font-size'))} className="border">
              <img src={increaseFont} alt=""/> 
              <span>Aumentar fonte</span> 
            </button>
            <button  onClick={() => decrease(window.getComputedStyle(document.body).getPropertyValue('font-size'))}>
              <img src={decreaseFont} alt=""/> 
              <span>Diminuir fonte</span> 
            </button>   
          </div>
          <button onClick={handleChangeTheme}>
            <img src={switchThemeLight} id="switchThemeLight" alt=""/> 
            <img src={switchThemeDark} id="switchThemeDark" alt=""/> 
            <p>Tema</p> 
          </button> 
        </div>
      </div>
    </Container>
  )
}

export default Header;