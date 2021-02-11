
import React from 'react';
import s from './style.module.css';
import backCardImg from '../../assets/cardBackSide.jpg';

import cn from 'classnames';


const PokemonCard = ({ id, name, img, type, values,isActive, onCardClick,minimize, className,isSelected }) => {

      const handleClickSelected = () => {
          onCardClick&&onCardClick(id)
    }

    return (
            <div className={cn(className,s.pokemonCard,{
                [s.active]:isActive===true,
                [s.selected]:isSelected,
            })}  onClick={handleClickSelected}>
                <div className={s.cardFront}>
                    <div className={cn(s.wrap,s.front)}>
                        <div className={cn(s.pokemon,s[type])}>
                            <div className={s.values}>
                                <div className={cn(s.count,s.top)}>{values.top}</div>
                                <div className={cn(s.count,s.right)}>{values.right}</div>
                                <div className={cn(s.count,s.bottom)}>{values.bottom}</div>
                                <div className={cn(s.count,s.left)}>{values.left}</div>
                            </div>
                            <div className={s.imgContainer}>
                                <img src={img} alt={name}/>
                            </div>
                            {!minimize &&(
                            <div className={s.info}>
                                <span className={s.number}>#{id}</span>
                                <h3 className={s.name}>{name}</h3>
                                <small className={s.type}>Type: <span>{type}</span></small>
                            </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className={s.cardBack}>
                    <div className={cn(s.wrap,s.back)}>
                        <img src={backCardImg} alt="Сard Backed"/>
                    </div>
                </div>

            </div>


    )
};
export default PokemonCard;
