import React, { useCallback, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Filter } from "./style";

const DropdownSeção: React.FC = (props) => {

  const [showDropdown, setShowDropDown] = useState(true);

  const handleShowDropdown = useCallback(() => {
    if(!!showDropdown === false) {
      setShowDropDown(true);    
    }else {
      setShowDropDown(false);    
    }
  }, [showDropdown, setShowDropDown]);
    return(
        <>
          <Filter ShowDropdown={!!showDropdown}>
              <div onClick={handleShowDropdown} id="dropdown">
                          <span>Todos</span>
                          <IoIosArrowDown id="img" size={17}/>
                  {props.children}
              </div>
          </Filter>
        </>
    )

}

export default DropdownSeção