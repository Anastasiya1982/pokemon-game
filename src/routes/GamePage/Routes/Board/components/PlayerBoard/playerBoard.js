import React, {useState} from 'react';
import PokemonCard from "../../../../../../components/PokemonCard";
import s from "./style.module.css";
import cn from 'classnames';

const PlayerBoard=({ cards,onClickCard,player})=>{
    const [isSelected,setIsSelected]=useState(null)

    return(
        <>
            {cards.map((card)=>(
                <div className={cn(s.cardBoard,{
                [s.selected]:isSelected===card.id})
                }
                onClick={()=> {
                    setIsSelected(card.id);
                    onClickCard && onClickCard({
                        ...card,
                        player
                    })
                }
                }
                >
                <PokemonCard
                    key={card.id}
                    name={card.name}
                    img={card.img}
                    id={card.id}
                    type={card.type}
                    values={card.values}
                    isActive
                    minimize

                />
                </div>))
            }
        </>
    )

}
export default PlayerBoard;
