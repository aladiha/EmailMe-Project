import React from 'react';
import './surveyForm.css';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';
import Fields  from './formFields';

const SurveyFormReview = ({setShowReviewForm, formValues}) => {

    const renderFields = () => {
        return Fields.map(field => {
            return <div>
            <label>{field.labelTitle}</label>
            <div>{formValues[field.name]}</div>
        </div>
        })
    } 

    return <div>
        <h3>please confirm your entries</h3>
        <div>
           {renderFields()}
        </div>
        <button style={{background: "brown", float: "none", border: "none"}} className="submit" onClick={setShowReviewForm}>
                        <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon> Back
        </button>
    </div>
};

function mapStateToProps(state){
    
    return {
        formValues: state.form.surveyForm.values
    };
}

export default connect(mapStateToProps)(SurveyFormReview);