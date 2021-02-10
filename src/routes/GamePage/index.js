import React, {useState} from 'react';
import {useRouteMatch, Switch, Route} from "react-router-dom";
import StartPage from "./Routes/StartPage/start";
import BoardPage from "./Routes/Board/board";
import FinishPage from './Routes/Finish/finish';
import {PokemonContext} from "../../context/pokemonContexr";


const GamePage = () => {
    const [selectPokemons,setSelectedPokemons]=useState({});

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
        )
    };

    const match = useRouteMatch('/game');

    return (
        <PokemonContext.Provider value={{
            pokemon:selectPokemons,
            onSelectedPokemons:handlerSelectedPokemons
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
