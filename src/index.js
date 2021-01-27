import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


const AppList=()=>{
    const items=['Item1','item2','Item3','item4'];
    return(
        <ul>
            {
                items.map(item=><li> {item}</li>)
            }
        </ul>
    );
}


const AppInput=()=>{
    const placeholder='Type text...';

    return(
        <label>
            <input placeholder={placeholder}/>
        </label>
    )
}

const AppHeader=()=>{
    return(
         <h1>Hello, world</h1>
    )
}

const App=()=>{
   return(
       <>
        <AppInput/>
        <AppHeader/>
        <AppList/>
    </>
   )
}


ReactDOM.render(<App/>, document.getElementById('root'));

