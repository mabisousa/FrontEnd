import React, { useCallback, useState, useContext } from "react";
import { Container } from './style';

import bandeiraBrasil from "../../assets/brazilFlag.svg";
import bandeiraEspanha from "../../assets/spainFlag.svg";
import bandeiraEUA from "../../assets/usaFlag.svg";
import font from "../../assets/textFont.svg";
import logo from "../../assets/logo.svg";

import tamanhoFonte from "../../js/fontSize";

import { IoSettingsSharp } from "react-icons/io5";
import { IoLanguage } from "react-icons/io5";

import { i18n } from "../../translate/i18n";
import Switch from "react-switch"
import { ThemeContext } from 'styled-components';
import { shade } from 'polished';
import { Link } from "react-router-dom";

interface theme{
  toggleTheme(): void
}

const Header: React.FC<theme> = ({toggleTheme, children,...props}) => {
  
  const [mostrarDropdown, setMostrarDropdown] = useState(true);
  const [mostrarIdiomas, setMostrarIdiomas] = useState(true);
  const [mostrarFonte, setMostrarFonte] = useState(true);
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
    <Container showFonts={!!mostrarFonte} 
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
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-type" viewBox="0 0 16 16">
          <path d="m2.244 13.081.943-2.803H6.66l.944 2.803H8.86L5.54 3.75H4.322L1 13.081h1.244zm2.7-7.923L6.34 9.314H3.51l1.4-4.156h.034zm9.146 7.027h.035v.896h1.128V8.125c0-1.51-1.114-2.345-2.646-2.345-1.736 0-2.59.916-2.666 2.174h1.108c.068-.718.595-1.19 1.517-1.19.971 0 1.518.52 1.518 1.464v.731H12.19c-1.647.007-2.522.8-2.522 2.058 0 1.319.957 2.18 2.345 2.18 1.06 0 1.716-.43 2.078-1.011zm-1.763.035c-.752 0-1.456-.397-1.456-1.244 0-.65.424-1.115 1.408-1.115h1.805v.834c0 .896-.752 1.525-1.757 1.525z"/>
        </svg> 
          <p >
            {i18n.t('header.font')}
          </p> 
        </button>
        <div id="fonts">
          <button onClick={() => tamanhoFonte("small")}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-type" viewBox="0 0 16 16">
              <path d="m2.244 13.081.943-2.803H6.66l.944 2.803H8.86L5.54 3.75H4.322L1 13.081h1.244zm2.7-7.923L6.34 9.314H3.51l1.4-4.156h.034zm9.146 7.027h.035v.896h1.128V8.125c0-1.51-1.114-2.345-2.646-2.345-1.736 0-2.59.916-2.666 2.174h1.108c.068-.718.595-1.19 1.517-1.19.971 0 1.518.52 1.518 1.464v.731H12.19c-1.647.007-2.522.8-2.522 2.058 0 1.319.957 2.18 2.345 2.18 1.06 0 1.716-.43 2.078-1.011zm-1.763.035c-.752 0-1.456-.397-1.456-1.244 0-.65.424-1.115 1.408-1.115h1.805v.834c0 .896-.752 1.525-1.757 1.525z"/>
            </svg> 
            <span>
              {i18n.t('header.small')}
            </span> 
          </button>
          <button onClick={() => tamanhoFonte("medium")}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-type" viewBox="0 0 16 16">
              <path d="m2.244 13.081.943-2.803H6.66l.944 2.803H8.86L5.54 3.75H4.322L1 13.081h1.244zm2.7-7.923L6.34 9.314H3.51l1.4-4.156h.034zm9.146 7.027h.035v.896h1.128V8.125c0-1.51-1.114-2.345-2.646-2.345-1.736 0-2.59.916-2.666 2.174h1.108c.068-.718.595-1.19 1.517-1.19.971 0 1.518.52 1.518 1.464v.731H12.19c-1.647.007-2.522.8-2.522 2.058 0 1.319.957 2.18 2.345 2.18 1.06 0 1.716-.43 2.078-1.011zm-1.763.035c-.752 0-1.456-.397-1.456-1.244 0-.65.424-1.115 1.408-1.115h1.805v.834c0 .896-.752 1.525-1.757 1.525z"/>
            </svg> 
            <span>
              {i18n.t('header.medium')}
            </span> 
          </button>
          <button onClick={() => tamanhoFonte("big")}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-type" viewBox="0 0 16 16">
              <path d="m2.244 13.081.943-2.803H6.66l.944 2.803H8.86L5.54 3.75H4.322L1 13.081h1.244zm2.7-7.923L6.34 9.314H3.51l1.4-4.156h.034zm9.146 7.027h.035v.896h1.128V8.125c0-1.51-1.114-2.345-2.646-2.345-1.736 0-2.59.916-2.666 2.174h1.108c.068-.718.595-1.19 1.517-1.19.971 0 1.518.52 1.518 1.464v.731H12.19c-1.647.007-2.522.8-2.522 2.058 0 1.319.957 2.18 2.345 2.18 1.06 0 1.716-.43 2.078-1.011zm-1.763.035c-.752 0-1.456-.397-1.456-1.244 0-.65.424-1.115 1.408-1.115h1.805v.834c0 .896-.752 1.525-1.757 1.525z"/>
            </svg> 
            <span>
              {i18n.t('header.big')}
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