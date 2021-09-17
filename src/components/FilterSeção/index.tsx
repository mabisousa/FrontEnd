import React, { useCallback, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Filter } from "./style";


const DropdownSeção: React.FC = () => {

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
                    <div >
                        <p>ABC</p>
                        <p>XYZ</p>
                        <p>DEF</p>
                        <p>Todos</p>
                    </div>
                </div>
            </Filter>
        </>
    )

}

export default DropdownSeção