//surveyform shows a form for user to add input

import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form'
import SurveyField from './SurveyField'
import { Link } from 'react-router-dom'

 const FIELDS = [
        {label: "survey title", name: "title"}, 
        {label: "subject line", name: "subject"},
        {label: "email body", name: "body"},
        {label: "recipient list", name: "emails"},
    ]

class SurveyForm extends Component {

   

    renderFields = () => {
        
        return FIELDS.map(field => <Field label={field.label} type="text" name={field.name} component={SurveyField}/>)
    }
       
    render() {
        return (
            <div>
                Survey Form Component
                <form onSubmit={this.props.handleSubmit(values => console.log(values) )}>
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
    
    FIELDS.forEach(function({ name }){
        if (!values[name]){
            errors[name] = "this field must be filled in"
        }
  
    })
    return errors
}
//     return errors
// }
//     console.log(values)
//     const errors = {}
//     if (!values.title) {
//         errors.title = "you must provide a title"
//     }
//     if (!values.subject) {
//         errors.title = "you must provide a title"
//     }
//     if (!values.title) {
//         errors.title = "you must provide a title"
//     }
//     if (!values.title) {
//         errors.title = "you must provide a title"
//     }


//     return errors
// }

export default reduxForm({
    validate,
    form: "surveyForm"
})(SurveyForm);

