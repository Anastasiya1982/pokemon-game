import React from 'react';
import s from './style.module.css';


// import  { ReactComponent as ReactLogo} from '../../assets/Pikachu-logo-D0AAA93F17-seeklogo.com.png';

const Header=({ title, descr })=>{
    return(
        <header className={s.root}>
            <div className={s.forest}></div>
            <div className={s.container}>
                <h1>{title}</h1>
                <p>{descr}</p>
            </div>
        </header>
    )

}
export default Header;