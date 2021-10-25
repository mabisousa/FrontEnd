import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";

import { Container } from './style';

import trocarTemaEscuro from "../../assets/switchOn.svg";
import trocarTemaClaro from "../../assets/switchOff.svg";
import bandeiraBrasil from "../../assets/brazilFlag.svg";
import bandeiraEspanha from "../../assets/spainFlag.svg";
import bandeiraEUA from "../../assets/usaFlag.svg";
import font from "../../assets/textFont.svg";
import logo from "../../assets/logo.svg";

import tamanhoFonte from "../../js/fontSize";

import { IoSettingsSharp } from "react-icons/io5";
import { IoLanguage } from "react-icons/io5";

import { i18n } from "../../translate/i18n";

const Header: React.FC = ({children,...props}) => {
  
  const [mostrarDropdown, setMostrarDropdown] = useState(true);
  const [mostrarIdiomas, setMostrarIdiomas] = useState(true);
  const [mostrarFonte, setMostrarFonte] = useState(true);
  const [mostrarTema, setMostrarTema] = useState(false);
  const [modoEscuro, setModoEscuro] = useState(false);
  
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
    <Container darkMode={modoEscuro} changeTheme={mostrarTema} showFonts={!!mostrarFonte} 
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
          <button onClick={() => tamanhoFonte("small")}>
            <img src={font} alt=""/> 
            <span>
              {i18n.t('header.small')}
            </span> 
          </button>
          <button onClick={() => tamanhoFonte("medium")}>
            <img src={font} alt=""/> 
            <span>
              {i18n.t('header.medium')}
            </span> 
          </button>
          <button onClick={() => tamanhoFonte("big")}>
            <img src={font} alt=""/> 
            <span>
              {i18n.t('header.big')}
            </span> 
          </button>   
        </div>
        <button onClick={handleMudarTema}>
          <img src={trocarTemaClaro} id="switchThemeLight" alt=""/> 
          <img src={trocarTemaEscuro} id="switchThemeDark" alt=""/> 
          <p>
            {i18n.t('header.theme')}
          </p> 
        </button> 
      </div>
    </Container>
  )
}

export default Header;