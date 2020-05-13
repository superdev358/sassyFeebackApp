import React from 'react';

const SurveyField = ({ input, label, meta: { error, touched } }) => {

    return (
        <div>
            <label>{label}</label>
            <input {...input} style={{marginBottom: '5px'}}/> 
            <div className="red-text" style={{marginBottom: '20px'}}>
            {touched && error}
            
            </div>
        </div>
    );
};

export default SurveyField;   