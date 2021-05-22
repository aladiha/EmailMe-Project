import React from 'react';
import './surveyForm.css';
import {faArrowLeft, faPaperPlane} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';
import formFields from './formFields';
import './surveyFormReview.css';
import * as actions from '../../actions';
import {withRouter} from 'react-router-dom';

const SurveyFormReview = ({setShowReviewForm, formValues, submitSurvey, history}) => {

    const renderFields = () => {
        return formFields.map(field => {
            return <div className="items">
            <label>{field.labelTitle}</label>
            <div className="item">{formValues[field.name]}</div>
        </div>
        })
    } 

    return <div className="review-container">
        <h3 className="title">please confirm your entries</h3>
        <div>
           {renderFields()}
        </div>
        <button style={{background: "rgb(146, 107, 7)", float: "none", border: "none",width: "120px", float: "none"}} className="submit buttons" onClick={setShowReviewForm}>
                        <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon> Back
        </button>
        <button className="submit buttons" style={{float: "none", border: "none", width: "120px", float: "right"}} onClick={() => submitSurvey(formValues, history)}>
                    Send <FontAwesomeIcon icon={faPaperPlane}></FontAwesomeIcon>
        </button>
    </div>
};

function mapStateToProps(state){
    
    return {
        formValues: state.form.surveyForm.values
    };
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));