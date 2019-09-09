// survey new shows surveyform and surveyreview

import React, { Component } from 'react';
import SurveyForm from './SurveyForm'
import { reduxForm } from 'redux-form';


class SurveyNew extends Component {
    render() {
        return (
            <div>
                Survey New Component
                <SurveyForm/>
            </div>
        );
    }
}

export default SurveyNew;