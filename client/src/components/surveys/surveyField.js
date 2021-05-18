import React from 'react';
import './surveyForm.css'

export default ({input, labelTitle, meta: {error, touched}}) => {

    return (
        <div>
            <label>{labelTitle}</label>
            <input {...input} className="input"/>
            <div style={{color: "red", marginTop: "5px", fontSize: "0.8em"}}>{touched && error}</div>
        </div>
    );
};

