import React from 'react';
import s from './style.module.css';
import cn from 'classnames';

const NavBar=({status,onClick,bgActive=false})=>{

    return(
        <nav className={cn(s.navbar,{[s.bgActive]:bgActive})}>
            <div className={s.navWrapper}>
                <p className={s.brand}>
                    LOGO
                </p>
                <div className={cn(s.menuButton, status?s.active:"")}  onClick={onClick}>
                    <span></span>
                </div>
            </div>
        </nav>
    )
};
export default NavBar;
