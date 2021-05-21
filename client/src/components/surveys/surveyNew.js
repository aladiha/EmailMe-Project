// surveyNew shows survey form and survey form reveal
import React, { useState } from 'react';
import SurveyForm from './surveyForm';
import SurveyFormReview from './surveyFormReview';

const SurveyNew = props => {

    const [showReviewForm, setShowReviewForm] = useState(false);


    const renderform = () => {
        console.log(showReviewForm)
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

export default SurveyNew;