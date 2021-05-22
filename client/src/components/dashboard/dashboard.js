import React from 'react';
import PlusButton from '../styledComponents/plusButton/plusButton';
import * as actions from '../../actions';
import {connect} from 'react-redux';
import SurveyList from '../surveys/surveyList';

const Dashboard = () => {

    return (
        <dev>
            <SurveyList/>
            <PlusButton/>
        </dev>
    );
}

export default connect(null, actions)(Dashboard);