import React, {useState} from 'react';
import {useRouteMatch, Switch, Route} from "react-router-dom";
import StartPage from "./Routes/StartPage/start";
import BoardPage from "./Routes/Board/board";
import FinishPage from './Routes/Finish/finish';
import {PokemonContext} from "../../context/pokemonContexr";



const GamePage = () => {
    const [selectPokemons,setSelectedPokemons]=useState({});
    const [player2Pokemons, setPlayer2Pokemons]=useState({})


    const handlerSelectedPokemons = (key, pokemon) => {
        setSelectedPokemons(prevState => {
                if (prevState[key]) {
                    const copyState = {...prevState};
                    delete copyState[key];
                    return copyState;
                }
                return {
                    ...prevState,
                    [key]: pokemon
                }
            }
        );


    };

const handlerSetPokemons2=(key,player2Pokemon)=> {
    console.log("выбран чужой покемон");
    setPlayer2Pokemons(prevState => {
        return {
            ...prevState,
            [key]: player2Pokemon
        }
    })
}




    const match = useRouteMatch('/game');
console.log("записаны в контексn:",player2Pokemons);

    return (
        <PokemonContext.Provider value={{
            pokemon:selectPokemons,
            onSelectedPokemons:handlerSelectedPokemons,
            player2Pokemons:player2Pokemons,
            onSetplayer2Pokemons:handlerSetPokemons2
            // onSelectedPlayer2Pokemon:handleSelectPlayer2Pokemon
        }}>

        <Switch>
            <Route path={`${match.path}/`} exact  component={StartPage} />
            <Route path={`${match.path}/board`} component={BoardPage} />
            <Route path={`${match.path}/finish`} component={FinishPage} />
        </Switch>

        // </PokemonContext.Provider>
    );
};
export default GamePage;
