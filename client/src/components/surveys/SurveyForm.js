//surveyform shows a form for user to add input

import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form'

class SurveyForm extends Component {
    
    
    render() {
        return (
            <div>
                Survey Form Component
                <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
                <Field
                type="text"
                name="surveyTitle"
                component="input"
                />
                <button type="submit">Submit</button>
                </form>
            </div>
        );
    } 
}

export default reduxForm({
    form: "surveyForm"
})(SurveyForm);

