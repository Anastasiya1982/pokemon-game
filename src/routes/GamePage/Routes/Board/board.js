import React, {useContext, useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import s from './style.module.css';
import PokemonCard from "../../../../components/PokemonCard";
import {PokemonContext} from "../../../../context/pokemonContexr";
import PlayerBoard from "./components/PlayerBoard/playerBoard";




// создаем функцию для подсчета ходов, количества перевернутых карт для каждого игрока

const counterWin=(board,player1,player2)=>{
    //считаем, сколько осталось карт у каждого игрока
    let player1Count=player1.length;
    let player2Count=player2.length;

    // проходим по массиву и считаем поссешены,  в зависимости от цвета прибавляем количество карточек в массив  игрокам
    board.forEach(item=>{
        if(item.card.possession==="red"){
            player2Count++;
        }
        else if(item.card.position==="blue"){
            player1Count++;
        }
    });
    console.log(player1Count);
    console.log(player2Count);
   return [player1Count,player2Count];
}


const BoardPage = () => {
    const { pokemon }=useContext(PokemonContext);
    const [board,setBoard]=useState([]);
    const [player2,setPlayer2]=useState([]);
    const [choiseCard,setChoiseCard]=useState(null);
    // устанавливаем для карточек игрока красный фон
    const [player1, setPlayer1] = useState(() => {
        return Object.values(pokemon).map(item => ({
            ...item,
            possession: 'blue'
        }))
    });
    const [steps,setSteps]=useState(0);

    const history = useHistory();




    useEffect(async ()=>{
        //получаем игровое поле
        const boardResponse = await fetch( "https://reactmarathon-api.netlify.app/api/board ");
        const request = await boardResponse.json();
            setBoard(request.data);
            //получаем карточки противника
            const playerTwoResponse=await fetch("https://reactmarathon-api.netlify.app/api/create-player");
            const playerTwoRequest=await playerTwoResponse.json();
            // добавляем карточкам противника синий фон
            setPlayer2(()=>{
                return (playerTwoRequest.data).map(item=>({
                    ...item,
                    possession:'red'

                }))});

    },[]);

  if(Object.keys(pokemon).length === 0){
    history.replace('/game');
}

    const onHandlerPlateClick=async (position)=>{
        console.log(position);
        console.log(choiseCard);
        if(choiseCard){
            const params={
                position,
                card:choiseCard,
                board
            };

            const res = await fetch('https://reactmarathon-api.netlify.app/api/players-turn', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(params),
            });

            const request = await res.json();

           //  убираем карточки которые выбраны  из колоды
            if(choiseCard.player===1){
                setPlayer1(prevState=>prevState.filter(item=>item.id !==choiseCard.id))
            };
            if(choiseCard.player===2){
                setPlayer2(prevState=>prevState.filter(item=>item.id !==choiseCard.id))
            };

            // перезаписываем в поле выбранную карточку  соответствующими параметрами
            setBoard(request.data);
           // устанавливаем  счетчик шагов
            setSteps(prevState=>{
                const count=prevState+1;
                return count;
            })
          }

    }

      //заводим useEffect который зависит от количесва шагов
    useEffect(()=>{
        if (steps === 9) {
            //деструктурируем каунт из глобальной функции
            const [count1, count2] = counterWin(board, player1, player2);
            if (count1 > count2) {
                alert("WIN")
            } else if (count1 < count2) {
                alert("LOST")
            } else {
                alert("DROW")
            }
            ;
            onFinishGame();

        }

    },[steps]);


    const onFinishGame=()=>{
        history.push('/game/finish');

    }


    return (
        <div className={s.root}>
						<div className={s.playerOne}>
                            <PlayerBoard cards={player1}
                                         player={1}
                                         onClickCard={(card)=>setChoiseCard(card)}

                            />
                        </div>
            <div className={s.board}>
                {
                    board.map(item=>(
                        <div className={s.boardPlate}
                             key={item.position}
                             onClick={()=> ! item.card && onHandlerPlateClick(item.position)}
                        >
                            {item.card && <PokemonCard minimize {...item.card} isActive />}
                        </div>
                    ))
                }


            </div>
            <div className={s.playerTwo}>
               <PlayerBoard cards={player2}
                            player={2}
                            onClickCard={(card)=>setChoiseCard(card)}
                            possession={"blue"}
               />
            </div>
        </div>
    );
};

export default BoardPage;
