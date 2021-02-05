import React, {useState} from 'react';
import Menu from "./Menu/menu";
import NavBar from "./Navbar/navBar";


const MenuHeader=({bgActive})=>{
    const[isActive,setIsActive]=useState(null);

    const handlerChange=()=>{
        console.log("button menu clicked")
        setIsActive(prevState=>!prevState);
    }

    return(
        <>{
         }
            <Menu status={isActive} onClick={handlerChange}/>
            <NavBar status={isActive} onClick={handlerChange} bgActive={bgActive}/>
        </>
    )
};
export default MenuHeader;
