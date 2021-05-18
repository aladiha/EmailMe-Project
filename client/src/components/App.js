import React, { useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../actions';

import Header from './header/header';
import Landing from './landing/landing';
import Dashboard from './dashboard/dashboard';
import SurveyNew from './surveys/surveyNew';


const App = (props) => {

    useEffect(() => {
        props.fetchUser();
    });

    return (
        <div>
            <BrowserRouter>
                <div>
                    <Header/>
                    <Route exact path="/" component={Landing}/>
                    <Route exact path="/surveys" component={Dashboard}/>
                    <Route  path="/surveys/new" component={SurveyNew}/>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default connect(null, actions)(App);