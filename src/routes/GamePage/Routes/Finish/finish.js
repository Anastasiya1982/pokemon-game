import React, {useContext, useEffect, useState} from 'react';
import s from './style.module.css';
import {PokemonContext} from "../../../../context/pokemonContexr";
import PlayerBoard from "../Board/components/PlayerBoard/playerBoard";
import PokemonCard from "../../../../components/PokemonCard";


const Finish=()=>{

    const { pokemon }=useContext(PokemonContext);
    const { player2Pokemons } =useContext(PokemonContext);

    // const [player1, setPlayer1] = useState(() => {
    //     return Object.values(pokemon).map(item => ({
    //         ...item,
    //     }))
    // });

    console.log("В финише приходит контекст пртивника",player2Pokemons)




    return(
        <div className={s.wrap}>
            <div className={s.title}>
                <h1> FINISH GAME</h1>
                <span className={s.separator}></span>
            </div>
            <div className={s.root}>
            <div className={s.playerPlate}> CARDS of THE FIRST PLAYER
               {
                   Object.values(pokemon).map(({name, img, id, type, values, selected,className})=>(
                   <PokemonCard
                       className={s.card}
                   key={id}
                   name={name}
                   img={img}
                   id={id}
                   type={type}
                   values={values}
                   isActive={true}
                   isSelected={selected}
                   />
                   ))
               }

            </div>
            </div>

            <div className={s.buttonContainer}>
                <button className={s.buttonWrapper}>END GAME</button>
            </div>
            <div className={s.playerPlate}> CARDS of THE SECOND PLAYER
                {
                    Object.values(player2Pokemons).map(({name, img, id, type, values, selected,className})=>(
                        <PokemonCard
                            className={s.card}
                            key={id}
                            name={name}
                            img={img}
                            id={id}
                            type={type}
                            values={values}
                            isActive={true}
                            isSelected={selected}
                        />
                    ))
                }
            </div>
        </div>
    )
};
export default Finish;
