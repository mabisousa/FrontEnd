import React, { useCallback, useState } from "react";

import { Container } from "./style";

import { IoIosArrowBack }  from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

const Dropdown: React.FC = (props) => {

  const [mostrarDropdown, setMostrarDropdown] = useState(true) 
  const [alterarFlecha, setAlterarFlecha] = useState(true);

  const handleMostrarDropdown = useCallback(() => {
    if(!!mostrarDropdown === false) {
      setMostrarDropdown(true);
      setAlterarFlecha(true);    
    }else {
      setMostrarDropdown(false);  
      setAlterarFlecha(false);     
    }
  }, [mostrarDropdown, setMostrarDropdown]);

  return(
    <>
      <Container mostrarDropdown={!!mostrarDropdown} alterarFlecha={!!alterarFlecha}>
        <div onClick={handleMostrarDropdown} id="dropdown">
            <IoIosArrowDown id="arrowDown" />
            <IoIosArrowBack id="arrowLeft" />
            {props.children}
        </div>
      </Container>
    </>
  )
}

export default Dropdown;