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



    const DATA= {
        "abilities": [
            "blaze",
            "solar-power"
        ],
        "stats": {
            "hp": 39,
            "attack": 52,
            "defense": 43,
            "special-attack": 60,
            "special-defense": 50,
            "speed": 65
        },
        "type": "fire",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
        "name": "charmander",
        "base_experience": 62,
        "height": 6,
        "id": 4,
        "values": {
            "top": 7,
            "right": 6,
            "bottom": 1,
            "left": 4
        }
    }

    // const getPokemons=async ()=>{
    //     const responce=await firebase.getPokemonsOnce();
    //      setPokemons(responce);
    // }


    useEffect(()=>{
      firebase.getPokemonsSoket((pokemons)=>{
          setPokemons(pokemons)
      });
    },[]);

    const  onCardClick=(id)=>{
        setPokemons(prevState => {
            return Object.entries(prevState).reduce((acc, item) => {
                const pokemon = {...item[1]};
                if (pokemon.id === id ) {
                        pokemon.isSelected=!pokemon.isSelected;
                        pushToContext(item);
                };
                acc[item[0]] =pokemon;


                return acc;
            }, {});
        });

    };

const pushToContext=(val)=>{
    console.log(val)
    selectedContext.cards.push(val);
    console.log(selectedContext);
}

    const onAddPokemon = () => {
        const data = DATA;
        firebase.addPokemon(data);
    }

    const onStartNewGame=()=>{
      history.push('/game/board');

   }
    return (
        <div className={s.wrap}>
            <div className={s.title}>
                <h3> GAME</h3>
                <span className={s.separator}></span>
                <button className={s.btnAddPokemon} onClick={onAddPokemon}>Add Pokemon</button>
                <button className={s.btnStartGame} onClick={onStartNewGame}>Start Game </button>
            </div>
            <div className={s.flex}>            {
                Object.entries(pokemons).map(([key, {name, img, id, type, values, isActive}]) => {
                    return <PokemonCard key={key}
                                        id={id}
                                        name={name}
                                        img={img}
                                        type={type}
                                        values={values}
                                        isActive={isActive}
                                        onCardClick={onCardClick}
                                        isSelected
                                        minimize
                                        className
                    />
                })
            }
            </div>
        </div>
    )
};
export default StartPage;
