import React from 'react';
import s from './style.module.css';
import imgUrl from '../../assets/bg3.jpg';

const Layout = ({id, title, descr, urlBg, colorBg}) => {
    const styles=urlBg?{ backgroundImage:`url(${imgUrl})`}:{backgroundColor:'grey'};

    return (
        <section className={s.root} style={styles} id={id}>
            <div className={s.wrapper}>
                <article>
                    <div className={s.title}>
                        <h3> {title}</h3>
                        <span className={s.separator}></span>
                    </div>
                    <div className={s.desc + ' ' + s.full}>
                        <p>{descr}</p>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Layout;
