import React, {useState, useEffect, useContext,} from 'react';
import s from './style.module.css';
import {useHistory} from 'react-router-dom';
import PokemonCard from '../../../../components/PokemonCard/index';
import {FireBaseContext} from "../../../../context/firebaseContext";
import {PokemonContext} from "../../../../context/pokemonContexr";


const StartPage=()=>{
    const firebase=useContext(FireBaseContext);
    const [pokemons,setPokemons]=useState({});
    const selectedContext=useContext(PokemonContext);
    const history=useHistory();


    // const getPokemons=async ()=>{
    //     const responce=await firebase.getPokemonsOnce();
    //      setPokemons(responce);
    // }


    useEffect(()=>{
        // получаем карточки покемотов из базы
      firebase.getPokemonsSoket((pokemons)=>{
          setPokemons(pokemons)
      });
      return ()=>firebase.offPokemonsSoket();
    },[]);


    const handleChangeSelected=(key)=>{
        const pokemon={...pokemons[key]}
       selectedContext.onSelectedPokemons(key,pokemon);
        setPokemons(prevState => ({
            ...prevState,
            [key]:{
                ...prevState[key],
                selected:!prevState[key].selected,
            }
            })

        )
    };


    const onStartNewGame=()=>{
      history.push('/game/board');

   }
    return (
        <div className={s.wrap}>
            <div className={s.title}>
                <h3> GAME</h3>
                <span className={s.separator}></span>
                <div className={s.buttonWrap}>
                <button onClick={onStartNewGame}
                        disabled={Object.keys(selectedContext.pokemon).length<5}
                >Start Game </button>
                </div>
            </div>
            <div className={s.flex}>            {
                Object.entries(pokemons).map(([key, {name, img, id, type, values, selected}]) => {
                    return <PokemonCard key={key}
                                        id={id}
                                        name={name}
                                        img={img}
                                        type={type}
                                        values={values}
                                        isActive={true}
                                        onCardClick={()=>{
                                            if(Object.keys(selectedContext.pokemon).length<5 || selected){
                                                handleChangeSelected(key)
                                            }
                                        }}

                                        isSelected={selected}
                                        minimize
                                        className={s.card}
                    />
                })
            }
            </div>
        </div>
    )
};
export default StartPage;
