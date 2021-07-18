import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home/'
import PagForm from './pages/PagForm';

export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/Formulario' component={PagForm} />
            </Switch>
        </BrowserRouter>
    );
}