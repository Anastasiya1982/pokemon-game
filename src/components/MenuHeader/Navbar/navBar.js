import React from 'react';
import s from './style.module.css';
import cn from 'classnames';

const NavBar=()=>{
    return(
        <nav className={s.navbar}>
            <div className={s.navWrapper}>
                <p className={s.brand}>
                    LOGO
                </p>
                <a className={cn(s.menuButton,s.active)}>
                    <span/>
                </a>
            </div>
        </nav>
    )
};
export default NavBar;
