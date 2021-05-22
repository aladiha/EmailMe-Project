import React from 'react';
import { reduxForm, Field } from 'redux-form';
import SurveyField from './surveyField';
import './surveyForm.css'
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';
import validateEmails from '../../utils/validateEmail';
import formFields from './formFields';


const SurveyForm = props => {

    const renderFields = () => {
        return (
            <div className="survey-fields">
                {formFields.map(({labelTitle, name}) => {
                   return <Field key={name} labelTitle={labelTitle} type="text" name={name} component={SurveyField} />
                })}
            </div>
        );
    }

    return (
        <div className="form-container">
            <form className="survey-form"
                onSubmit={props.handleSubmit(props.setShowReviewForm)}
            >
                <div className="my-div">New Survey</div> 
                {renderFields()}
                <div className="survey-buttons">
                <Link to="/surveys">
                    <button style={{background: "brown", border: "none"}} className="submit" type="submit">
                        <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon> Cancel
                    </button>
                </Link>
                <button className="submit" type="submit">Review <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></button>
                </div>
            </form> 
        </div>
    );
};

const validate = (values) => {
    const error = {};
    error.recipients = validateEmails(values.recipients || '');

    if(!values.title)
        error.title = "you must provide a title!";
    if(!values.subject)
        error.subject = "you must provide a subject line!";
    if(!values.body)
        error.body = "you must provide an email body!";
    if(!values.recipients)
        error.recipients = "you must provide at least one valid email!";

    return error;
}

export default reduxForm({
    validate,
    form: 'surveyForm',
    destroyOnUnmount: false
})(SurveyForm);