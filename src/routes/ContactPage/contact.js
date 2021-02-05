import React  from 'react';

import s from "./style.module.css"


const ContactPage=()=>{


    return(
        <div className={s.wrap}>
            <div className={s.title}>
                <h3> OUR CONTACTS </h3>
                <span className={s.separator}></span>
            </div>
            <div className={s.flex}>
               Tel/ +779-555-888
                Telegram:_________________

            </div>
        </div>
    )
};
export default ContactPage;
