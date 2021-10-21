import React, { useCallback, useState } from "react";

import { Container } from "./style";

import { IoIosArrowBack }  from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

const Dropdown: React.FC = (props) => {

  const [mostrarDropdown, setMostrarDropdown] = useState(true) 
  const [alterarFlecha, setAlterarFlecha] = useState(true);

  const handleShowDropdown = useCallback(() => {
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
      <Container showDropdown={!!mostrarDropdown} showArrow={!!alterarFlecha}>
        <div onClick={handleShowDropdown} id="dropdown">
            <IoIosArrowDown id="arrowDown" />
            <IoIosArrowBack id="arrowLeft" />
            {props.children}
        </div>
      </Container>
    </>
  )
}

export default Dropdown;