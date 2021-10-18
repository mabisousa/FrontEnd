import React, { useCallback, useState, useEffect } from "react";
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
import { IoLanguage } from "react-icons/io5";
import { i18n } from "../../translate/i18n";

const Header: React.FC = ({children,...props}) => {
  
  const [showDropdown, setShowDropDown] = useState(true);
  const [showIdioms, setShowIdioms] = useState(true);
  const [showFonts, setShowFonts] = useState(true);
  const [showTheme, setShowTheme] = useState(true);
  const [darkMode, setDarkMode] = useState(true);
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
    if(!!showTheme === false && darkMode === true) {
      setShowTheme(true);  
      setDarkMode(false);
      window.localStorage.setItem('Theme:darkMode', JSON.stringify(darkMode));
    }else {
      setShowTheme(false); 
      setDarkMode(true)
      window.localStorage.setItem('Theme:darkMode', JSON.stringify(darkMode));
    }
  }, [showTheme, darkMode]);
  
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
    <Container darkMode={darkMode} changeTheme={showTheme} showFonts={!!showFonts} 
      showIdioms={!!showIdioms} showDropdown={!!showDropdown} {...props}> 
      <div id="name">
        <Link to="/home"><img src={logo} alt=""/></Link>
        {children}
      </div>   
      <div id="exit">
        <div onClick={handleShowDropdown} >
          <IoSettingsSharp />
        </div> 
        <p id="sair" onClick={exitSystem}>
          {i18n.t('header.exit')}
        </p>
      </div>
      <div id="dropdown">
        <button onClick={handleShowIdioms}>
          <IoLanguage /> 
          <p>
            {i18n.t('header.idioms')}
          </p>          
        </button>
        <div id="idioms">
          <button  onClick={handleChangeEs}>
            <img src={bandeiraEspanha} alt=""/> 
            <span >
              Español
            </span> 
          </button>
          <button onClick={handleChangeEn}>
            <img src={bandeiraEUA} alt=""/> 
            <span>
              English
            </span> 
          </button>
          <button onClick={handleChangePt}>
            <img src={bandeiraBrasil} alt=""/>
            <span>
              Português do Brasil
            </span> 
          </button>
        </div>
        <button onClick={handleShowFont}>
          <img src={font} alt=""/> 
          <p >
            {i18n.t('header.font')}
          </p> 
        </button>
        <div id="fonts">
          <button  onClick={() => increse(window.getComputedStyle(document.body)
            .getPropertyValue('font-size'))}>
            <img src={increaseFont} alt=""/> 
            <span>
              {i18n.t('header.increaseFont')}
            </span> 
          </button>
          <button  onClick={() => decrease(window.getComputedStyle(document.body)
            .getPropertyValue('font-size'))}>
            <img src={decreaseFont} alt=""/> 
            <span>
              {i18n.t('header.decreaseFont')}
            </span> 
          </button>   
        </div>
        <button onClick={handleChangeTheme}>
          <img src={switchThemeLight} id="switchThemeLight" alt=""/> 
          <img src={switchThemeDark} id="switchThemeDark" alt=""/> 
          <p>
            {i18n.t('header.theme')}
          </p> 
        </button> 
      </div>
    </Container>
  )
}

export default Header;