//shows user all their form inputs to review before submitting a campaign
import React from 'react';
import { connect } from 'react-redux'
import formFields from './formFields'
import * as actions from '../../actions'
import { withRouter } from 'react-router-dom'


const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {

    const reviewFormFields = formFields.map(({ name, label }) => {
        return (
            <div key={name}>
                <label>{label}</label>
                <div>{formValues[name]}</div>
            </div>
        )
    })
    

    return (
        <div>
            <h5>
                Review Campaign
            </h5>
            <div>
                {reviewFormFields}
            </div>
            
            <button className="yellow darken-3 btn-flat white-text" onClick={onCancel}>Edit Campaign</button>
            <button className="green right btn-flat white-text" onClick={() => submitSurvey(formValues, history)}>Submit Survey
                <i className="material-icons right">email</i>
            </button>

        </div>
    );
};

function mapStateToProps(state){
    return { formValues: state.form.surveyForm.values }
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview))