import React, { useCallback, useState, useContext } from "react";
import { Container } from './style';
import logo from "../../assets/logo.svg";
import { IoSettingsSharp } from "react-icons/io5";
import trocarTemaEscuro from "../../assets/switchOn.svg";
import trocarTemaClaro from "../../assets/switchOff.svg";
import font from "../../assets/textFont.svg";
import bandeiraBrasil from "../../assets/brazilFlag.svg";
import { Link } from "react-router-dom";
import decrease from "../../js/decrease";
import increse from "../../js/increase";
import bandeiraEspanha from "../../assets/spainFlag.svg";
import bandeiraEUA from "../../assets/usaFlag.svg";
import increaseFont from "../../assets/increaseFont.svg";
import decreaseFont from "../../assets/decreaseFont.svg";
import { IoLanguage } from "react-icons/io5";
import { i18n } from "../../translate/i18n";
import Switch from "react-switch"
import { ThemeContext } from 'styled-components';
import { shade } from 'polished';

interface theme{
  toggleTheme(): void
}

const Header: React.FC<theme> = ({toggleTheme, children,...props}) => {
  
  const [mostrarDropdown, setMostrarDropdown] = useState(true);
  const [mostrarIdiomas, setMostrarIdiomas] = useState(true);
  const [mostrarFonte, setMostrarFonte] = useState(true);
  const [mostrarTema, setMostrarTema] = useState(false);
  const [modoEscuro, setModoEscuro] = useState(false);
  const { colors, title } = useContext(ThemeContext);

  const handleMostrarDropdown = useCallback(() => {
    if(!!mostrarDropdown === false) {
      setMostrarDropdown(true);    
    }else {
      setMostrarDropdown(false);    
    }
  }, [mostrarDropdown, setMostrarDropdown]); 

  const handleMostrarIdiomas = useCallback(() => {
    if(!!mostrarIdiomas === false) {
      setMostrarIdiomas(true);    
    }else {
      setMostrarIdiomas(false);    
    }
  }, [mostrarIdiomas, setMostrarIdiomas]); 

  const handleMostrarFonte = useCallback(() => {
    if(!!mostrarFonte === false) {
      setMostrarFonte(true);    
    }else {
      setMostrarFonte(false);    
    }
  }, [mostrarFonte, setMostrarFonte]); 

  const handleMudarTema = useCallback(() => {
    if(mostrarTema === false && modoEscuro === false) {
      setMostrarTema(true);  
      setModoEscuro(true);
      localStorage.setItem('Theme:darkMode', JSON.stringify(modoEscuro));
      document.body.style.background="#1F262B"
    }else {
      setMostrarTema(false); 
      setModoEscuro(false)
      localStorage.setItem('Theme:darkMode', JSON.stringify(modoEscuro));
      document.body.style.background="#fff"
    }
  }, [mostrarTema, modoEscuro]);
  
  const sairDoSistema = () => {
    localStorage.removeItem("@WEGusers:token");
    localStorage.removeItem("@WEGusers:usuario");

    window.document.location.reload()
  }

  const handleMudarIngles = () => {
    localStorage.setItem('i18nextLng', 'en-US');
    window.location = window.location
  }

  const handleMudarPortugues = () => {
    localStorage.setItem('i18nextLng', 'pt-BR');
    window.location = window.location
  }

  const handleMudarEspanhol = () => {
    localStorage.setItem('i18nextLng', 'es-ES');
    window.location = window.location
  }
  
  return( 
    <Container changeTheme={mostrarTema} showFonts={!!mostrarFonte} 
      showIdioms={!!mostrarIdiomas} showDropdown={!!mostrarDropdown} {...props}> 
      <div id="name">
        <Link to="/home"><img src={logo} alt=""/></Link>
        {children}
      </div>   
      <div id="exit">
        <div onClick={handleMostrarDropdown} >
          <IoSettingsSharp />
        </div> 
        <p id="sair" onClick={sairDoSistema}>
          {i18n.t('header.exit')}
        </p>
      </div>
      <div id="dropdown">
        <button onClick={handleMostrarIdiomas}>
          <IoLanguage /> 
          <p>
            {i18n.t('header.idioms')}
          </p>          
        </button>
        <div id="idioms">
          <button  onClick={handleMudarEspanhol}>
            <img src={bandeiraEspanha} alt=""/> 
            <span >
              Español
            </span> 
          </button>
          <button onClick={handleMudarIngles}>
            <img src={bandeiraEUA} alt=""/> 
            <span>
              English
            </span> 
          </button>
          <button onClick={handleMudarPortugues}>
            <img src={bandeiraBrasil} alt=""/>
            <span>
              Português do Brasil
            </span> 
          </button>
        </div>
        <button onClick={handleMostrarFonte}>
          <img src={font} alt=""/> 
          <p >
            {i18n.t('header.font')}
          </p> 
        </button>
        <div id="fonts">
          <button onClick={() => increse(window.getComputedStyle(document.body)
            .getPropertyValue('font-size'))}>
            <img src={increaseFont} alt=""/> 
            <span>
              {i18n.t('header.increaseFont')}
            </span> 
          </button>
          <button onClick={() => decrease(window.getComputedStyle(document.body)
            .getPropertyValue('font-size'))}>
            <img src={decreaseFont} alt=""/> 
            <span>
              {i18n.t('header.decreaseFont')}
            </span> 
          </button>   
        </div>
        <button>
          <Switch
            onChange={toggleTheme}
            checked={title === 'dark'}
            checkedIcon={false}
            uncheckedIcon={false}
            height={10}
            width={30}
            handleDiameter={20}
            offColor={shade(0.15, colors.undeline)}
            onColor={colors.undeline}
          />
          <p>
            {i18n.t('header.theme')}
          </p> 
        </button> 
      </div>
    </Container>
  )
}

export default Header;