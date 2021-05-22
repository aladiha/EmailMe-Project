// surveyNew shows survey form and survey form reveal
import React, { useState } from 'react';
import SurveyForm from './surveyForm';
import SurveyFormReview from './surveyFormReview';
import {reduxForm} from 'redux-form';

const SurveyNew = props => {

    const [showReviewForm, setShowReviewForm] = useState(false);


    const renderform = () => {
        if(showReviewForm){
            return <SurveyFormReview setShowReviewForm={() => setShowReviewForm(false)}/>;
        }
        return <SurveyForm setShowReviewForm={() => setShowReviewForm(true)}/>;
    }

    return (
        <div>
            {renderform()}
        </div>
    );
};

export default reduxForm({
    form: 'surveyForm',
})(SurveyNew);