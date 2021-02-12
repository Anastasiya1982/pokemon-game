import React, {useContext, useState} from 'react';
import s from './style.module.css';
import {PokemonContext} from "../../../../context/pokemonContexr";
import PokemonCard from "../../../../components/PokemonCard";
import PlayerBoard from "../Board/components/PlayerBoard/playerBoard";

const Finish=()=>{

    const { pokemon }=useContext(PokemonContext);
    const [player1, setPlayer1] = useState(() => {
        return Object.values(pokemon).map(item => ({
            ...item,
        }))
    });
    return(
        <div className={s.wrap}>
            <div className={s.title}>
                <h1> FINISH GAME</h1>
                <span className={s.separator}></span>
            </div>
            <div className={s.playerPlate}> CARDS of THE FIRST PLAYER
                <PlayerBoard cards={player1}
                             player={1}
                             minimize={false}
                             className={s.card}
                />
            </div>


            <div>
                <button className={s.buttonWrapper}>END GAME</button>
            </div>
            <div className={s.playerCardWra}>PLAYER 2 CARDS</div>
        </div>
    )
};
export default Finish;
