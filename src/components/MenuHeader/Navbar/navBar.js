import React from 'react';
import s from './style.module.css';
import cn from 'classnames';

const NavBar=({status,onClick})=>{


    return(
        <nav className={s.navbar}>
            <div className={s.navWrapper}>
                <p className={s.brand}>
                    LOGO
                </p>
                <a className={cn(s.menuButton, status?s.active:"")}  onClick={onClick}>

                    <span></span>
                </a>
            </div>
        </nav>
    )
};
export default NavBar;
