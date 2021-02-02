import React, {useState} from 'react';
import Menu from "./Menu/menu";
import NavBar from "./Navbar/navBar";


const MenuHeader=()=>{
    const[isActive,setIsActive]=useState(false);

    const handlerChange=()=>{
        console.log("button menu clicked")
        setIsActive(!isActive);
    }

    return(
        <>{
         }
            <Menu status={isActive} onClick={handlerChange}/>
            <NavBar status={isActive} onClick={handlerChange}/>
        </>
    )
};
export default MenuHeader;
