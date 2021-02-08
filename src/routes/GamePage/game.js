import React, {useState, useEffect, useContext} from 'react';
import s from './style.module.css';
import PokemonCard from "../../components/PokemonCard";
import database from "../../services/firebase";
import {FireBaseContext} from "../../context/firebaseContext";


const GamePage=()=>{
    const firebase=useContext(FireBaseContext)
    const [pokemons,setPokemons]=useState({});
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
      firebase.getPokemonsSocket((pokemons)=>{
          setPokemons(pokemons)
      });
    },[]);

    const  handleChangeActiveClick=(id)=>{
        setPokemons(prevState => {
            return Object.entries(prevState).reduce((acc, item) => {
                const pokemon = {...item[1]};
                if (pokemon.id === id) {
                        pokemon.isActive=!pokemon.isActive
                };
                acc[item[0]] =pokemon;
                firebase.postPokemon(item[0],pokemon);
                return acc;
            }, {});
        });
    };



    const onAddPokemon = () => {
        const data=DATA;
        firebase.addPokemon(data)
        }


    return (
        <div className={s.wrap}>
            <div className={s.title}>
                <h3> GAME</h3>
                <span className={s.separator}></span>
                <button className={s.btnAddPokemon} onClick={onAddPokemon}>ADD Pokemon</button>
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
                                        onCardClick={handleChangeActiveClick}
                    />
                })
            }
            </div>
        </div>
    )
};
export default GamePage;
