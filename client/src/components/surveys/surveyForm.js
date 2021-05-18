import React, { useState } from 'react';
import { reduxForm, Field, reducer } from 'redux-form';
import SurveyField from './surveyField';
import './surveyForm.css'
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';


const Fields = [
    {
        labelTitle: "Survey Title",
        name: "title"
    },
    {
        labelTitle: "Subject Line",
        name: "subject"
    },
    {
        labelTitle: "Email Body",
        name: "body"
    },
    {
        labelTitle: "Recipient List",
        name: "emails"
    }
];

const SurveyForm = props => {

    const renderFields = () => {
        
        return (
            <div className="survey-fields">
                {Fields.map(({labelTitle, name}) => {
                   return <Field key={name} labelTitle={labelTitle} type="text" name={name} component={SurveyField} />
                })}
            </div>
        );
    }

    return (
        <div className="form-container">
            <form className="survey-form"
                onSubmit={props.handleSubmit(values => console.log(values))}
            >
                <div className="my-div">New Survey</div> 
                {renderFields()}
                <button className="submit" type="submit">Review <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></button>
                <Link to="/surveys">
                    <button style={{background: "brown", float: "none", border: "none"}} className="submit" type="submit">
                        <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon> Cancel
                    </button>
                </Link>
            </form> 
        </div>
    );
};

const validate = (values) => {
    const error = {};

    if(!values.title)
        error.title = "you must provide a title!";
    if(!values.subject)
        error.subject = "you must provide a subject line!";
    if(!values.body)
        error.body = "you must provide an email body!";
    if(!values.emails)
        error.emails = "you must provide at least one valid email!";
    return error;
}

export default reduxForm({
    validate,
    form: 'surveyForm'
})(SurveyForm);