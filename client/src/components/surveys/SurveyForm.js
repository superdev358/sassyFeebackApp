//surveyform shows a form for user to add input

import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form'
import SurveyField from './SurveyField'
import { Link } from 'react-router-dom'
import validateEmails from '../../utils/validateEmails'
import formFields from './formFields'


class SurveyForm extends Component {

   

    renderFields = () => {
        
        return formFields.map(({ name, label }) => <Field key={name} label={label} type="text" name={name} component={SurveyField}/>)
    }
       
    render() {
        return (
            <div>
                Survey Form Component
                <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
                {this.renderFields()}
                <Link to="/surveys" className="red btn-flat left white-text">Cancel</Link>
                <button className="teal btn-flat right white-text" type="submit">
                    Next <i className="material-icons right">done</i>
                </button>
                </form>
            </div>
        );
    } 
}

const validate = values => {
    const errors = {}
     
    errors.recipients = validateEmails(values.recipients || '')
    formFields.forEach(function({ name }){
        if (!values[name]){
            errors[name] = "this field must be filled in"
        }
  
    })

    return errors
}

export default reduxForm({
    validate,
    form: "surveyForm",
    destroyOnUnmount: false
})(SurveyForm);

