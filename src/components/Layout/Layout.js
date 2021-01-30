import React from 'react';
import s from './style.module.css';


const Layout = ({id, title, urlBg, colorBg,children}) => {
    const styles={};
    if(urlBg){
        styles.backgroundImage=`url(${urlBg})`
}
    if(colorBg){
        styles.backgroundColor=colorBg;
    }

    return (
        <section className={s.root} style={styles} id={id}>
            <div className={s.wrapper}>
                <article>
                    <div className={s.title}>
                        <h3> {title}</h3>
                        <span className={s.separator}></span>
                    </div>
                    <div className={s.desc + ' ' + s.full}>
                       {children}
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Layout;
