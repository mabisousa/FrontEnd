import React, { useCallback, useState } from "react";

import { Container } from "./style";

import { IoIosArrowBack }  from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";



const Dropdown: React.FC = (props) => {

  const [showDropdown, setShowDropDown] = useState(true) 
  const [showArrow, setShowArrow] = useState(true);

  const handleShowDropdown = useCallback(() => {
    if(!!showDropdown === false) {
      setShowDropDown(true);
      setShowArrow(true);    
    }else {
      setShowDropDown(false);  
      setShowArrow(false);     
    }
  }, [showDropdown, setShowDropDown]);

  return(
    <>
      <Container showDropdown={!!showDropdown} showArrow={!!showArrow}>
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