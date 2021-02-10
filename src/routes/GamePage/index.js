import React, {useState} from 'react';
import {useRouteMatch, Switch, Route} from "react-router-dom";
import StartPage from "./Routes/StartPage/start";
import BoardPage from "./Routes/Board/board";
import FinishPage from './Routes/Finish/finish';
import {PokemonContext} from "../../context/pokemonContexr";


const GamePage = () => {
    const [cards,setCard]=useState([]);

    const handlerIsSelect=(val)=>{
     setCard(val);
 }
    const match = useRouteMatch('/game');
    return (
        <PokemonContext.Provider value={{cards,addSelectCard:handlerIsSelect}}>
        <Switch>
            <Route path={`${match.path}/`} exact  component={StartPage} />
            <Route path={`${match.path}/board`} component={BoardPage} />
            <Route path={`${match.path}/finish`} component={FinishPage} />
        </Switch>
        // </PokemonContext.Provider>
    );
};
export default GamePage;
