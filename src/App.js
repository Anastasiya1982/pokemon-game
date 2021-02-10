import React from 'react';
import HomePage from "./routes/HomePage/home";
import GamePage from "./routes/GamePage/index";
import AboutPage from "./routes/AboutPage/about";
import {useRouteMatch, Switch, Route, Redirect} from "react-router-dom";
import MenuHeader from "./components/MenuHeader/MenuHeader";
import Footer from "./components/Footer/footer";
import s from './style.module.css';
import ContactPage from "./routes/ContactPage/contact";
import {FireBaseContext} from './context/firebaseContext';
import Firebase from "./services/firebase";



const App = () => {
    const match=useRouteMatch('/');


    return (
        <FireBaseContext.Provider value={new Firebase()}>
        <Switch>
            <Route path="/404" render={() => (
                <h1>404 Not Found</h1>
            )}/>
            <Route>
                <>
                    <MenuHeader bgActive={!match.isExact}/>
                    <div className={s.wrap}>
                        <Switch >
                            <Route path="/"  exact component={HomePage}/>
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
        </FireBaseContext.Provider>

    )
};
    export default App;
