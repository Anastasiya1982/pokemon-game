import React from 'react';
import HomePage from "./routes/HomePage/home";
import GamePage from "./routes/GamePage/game";
import AboutPage from "./routes/AboutPage/about";
import {useRouteMatch, Switch, Route, Redirect} from "react-router-dom";
import MenuHeader from "./components/MenuHeader/MenuHeader";
import Footer from "./components/Footer/footer";
import s from './style.module.css';
import ContactPage from "./routes/ContactPage/contact";


const App = () => {

    const match=useRouteMatch('/');
    console.log(match);


    return (
        <Switch>
            <Route path="/404" render={() => (
                <h1>404 Not Found</h1>
            )}/>
            <Route>
                <>
                    <MenuHeader bgActive={!match.isExact}/>
                    <div className={s.wrap}>
                        <Switch >
                            <Route path="/" exact component={HomePage}/>
                            <Route path="/home" component={HomePage}/>
                            <Route path="/game" component={GamePage}/>
                            <Route path="/about" component={AboutPage} />
                            <Route path="/contact" component={ContactPage} />
                            <Route  render={()=>(
                                <Redirect to ="/404"/>
                                )}/>
                        </Switch>
                    </div>
                    <Footer/>
                </>
            </Route>
            <Route render={() => (
                <h1>404 Not Found</h1>
            )}/>
        </Switch>

    )
};
    export default App;
