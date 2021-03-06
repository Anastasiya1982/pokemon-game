import React, {useContext, useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import s from './style.module.css';
import PokemonCard from "../../../../components/PokemonCard";
import {PokemonContext} from "../../../../context/pokemonContexr";

const BoardPage = () => {
    const [board,setBoard]=useState([]);
    const { pokemon }=useContext(PokemonContext);
    const history=useHistory();




    useEffect(async ()=>{
        const boardResponse = await fetch( "https://reactmarathon-api.netlify.app/api/board ");
        const request = await boardResponse.json();
            setBoard(request.data);

    },[]);

    console.log(board)
//   if(Object.keys(pokemon).length === 0){
//     history.replace('/game');
// }

    const onHandlerPlateClick=(position)=>{
        console.log(position)
    }


    return (
        <div className={s.root}>
						<div className={s.playerOne}>
                            {Object.values(pokemon).map(({name, img, id, type, values})=>(
                                    <PokemonCard
                                        key={id}
                                        name={name}
                                        img={img}
                                        id={id}
                                        type={type}
                                        values={values}
                                        isActive
                                        className={s.card}
                                        isSelected
                                        minimize
                                    />
                                ))}
                        </div>
            <div className={s.board}>
                {
                    board.map(item=>(
                        <div className={s.boardPlate}
                             key={item.position}
                             onClick={()=> ! item.card && onHandlerPlateClick(item.position)}


                        >
                            {item.card && <PokemonCard minimize {...item} />}
                        </div>
                    ))
                }


            </div>
        </div>
    );
};

export default BoardPage;
