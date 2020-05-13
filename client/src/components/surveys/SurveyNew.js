// survey new shows surveyform and surveyreview

import React, { Component } from 'react';
import SurveyForm from './SurveyForm'
import { reduxForm } from 'redux-form';
import SurveyFormReview from './SurveyFormReview'



class SurveyNew extends Component {

    state = {
        showFormReview: false
    }

    renderContent = () => {
        if (this.state.showFormReview) {
            return <SurveyFormReview onCancel={() => this.setState({showFormReview: false})} />
        } 
            return <SurveyForm onSurveySubmit={() => this.setState({showFormReview: true})} />    
    }

    render() {
        return (
            <div>
                Survey New Component
                {this.renderContent()}
            </div>
        );
    }
}

export default reduxForm({
    form: "surveyForm"
})(SurveyNew);