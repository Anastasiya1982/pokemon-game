import React, {useState} from 'react';
import HomePage from "./routes/Home/home";
import GamePage from "./routes/Game/game";




const App = () => {
    const[page,setPage]=useState('app');

    const handlerChange=(page)=>{
        console.log("ChangePage");
        setPage(page)
    }

    switch (page) {
        case "app":
            return <HomePage  onChangePage={handlerChange}/>

        case "game":
            return <GamePage/>
        default:return <HomePage/>

    }

};
    export default App;
