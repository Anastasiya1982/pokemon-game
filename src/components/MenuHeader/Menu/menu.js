import React from 'react';
import {Link} from "react-router-dom";
import cn from 'classnames';
import s from './style.module.css';


const MENU=[
    {title:'HOME',
     to:"/home"
    },
    {title:'GAME',
        to:"/game"
    },
    {title:'ABOUT',
        to:"/about"
    },
    {title:'CONTACT',
        to:"/contact"
    },
    {title:'Not Found ',
        to:"/contact"
    }
]


const Menu=({status,onClick})=>{

    const onClickClose=()=>{
        onClick&&onClick()
    }


    return (
        <div className={cn(s.menuContainer,
            {   [s.active]: status === true,
                [s.deactive]: status === false
            })} >
            <div className={s.overlay}/>
            <div className={s.menuItems}>
                <ul>
                    {
                        MENU.map((item,index)=>{
                            return(
                                <li key={index} >
                                    <Link key={item.index} to={item.to} onClick={onClickClose}>
                                        {item.title}
                                    </Link>
                                </li>)})
                    }
                </ul>
            </div>
        </div>

    )
}
export default Menu;
