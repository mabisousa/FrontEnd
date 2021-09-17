import React, { useCallback, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Filter } from "./style";


const DropdownStatus: React.FC = () => {

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
                        <p>Concluído</p>
                        <p>Em andamento</p>
                        <p>Atrasado</p>
                        <p>Todos</p>
                    </div>
                </div>
            </Filter>
        </>
    )

}

export default DropdownStatus