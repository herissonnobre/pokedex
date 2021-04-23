import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import PokemonsList from './components/PokemonsList';
import Home from './pages/home';
import Pokedex from './pages/pokedex';

import './routes.css';

export const Routes = () => {
    return (
        <div id="routes">
            <div className="pageHeader"><Header /></div>
            <Switch>
                <Route className="Home" exact path="/" component={Home} />
                <Route className="Pokedex" exact path="/pokedex" component={Pokedex}>
                    <Redirect to="/pokedex/1" component={PokemonsList} />
                </Route>
                <Route className="PokemonsList" path="/pokedex/:pageId" component={PokemonsList} />
            </Switch>
        </div> 
    )
}