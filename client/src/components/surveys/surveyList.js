import React, {Component} from 'react';
import { connect } from 'react-redux';
import {fetchSurveys} from '../../actions';
import './surveyList.css'

class SurveyList extends Component{

    componentDidMount(){
        this.props.fetchSurveys();
    };

    renderSurveys(){

        return this.props.surveys.reverse().map(survey => {
            return <div className="listItem">
                <div className="content">
                    <p className="survey-title">
                        <span>{survey.title}</span>
                    </p>
                    <p className="survey-body">
                        <span>{survey.body}</span>
                    </p>
                </div>
                <div className="footer-footer">
                    <p className="card-footer">
                        <span>yes {survey.yes}</span>
                        <span>no {survey.no}</span>
                    </p>
                    <p className="right">
                        Sent On {new Date(survey.dateSent).toLocaleDateString()}
                    </p>
                </div>
            </div>
        })
    }

    render(){
       return <div className="surveyList">
            {this.renderSurveys()}
        </div>
    };
} 

function mapStateToProps({surveys}) {
    return {
        surveys
    };
}

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);