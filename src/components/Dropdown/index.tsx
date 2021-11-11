import React, { useCallback, useState } from "react";

import { Container } from "./style";

import { IoIosArrowBack, IoIosArrowDown }  from "react-icons/io";

const Dropdown: React.FC = (props) => {

  const [mostrarDropdown, setMostrarDropdown] = useState(true) 
  const [alterarSeta, setAlterarSeta] = useState(true);

  const handleMostrarDropdown = useCallback(() => {
    if(!!mostrarDropdown === false) {
      setMostrarDropdown(true);
      setAlterarSeta(true);    
    }else {
      setMostrarDropdown(false);  
      setAlterarSeta(false);     
    }
  }, [mostrarDropdown, setMostrarDropdown]);

  return(
    <>
      <Container mostrarDropdown={!!mostrarDropdown} alterarSeta={!!alterarSeta}>
        <div onClick={handleMostrarDropdown} id="dropdown">
            <IoIosArrowDown id="setaBaixo" />
            <IoIosArrowBack id="setaEsquerda" />
            {props.children}
        </div>
      </Container>
    </>
  )
}

export default Dropdown;