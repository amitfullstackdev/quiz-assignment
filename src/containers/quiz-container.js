import React, { Component } from 'react'
import { connect } from "react-redux";


import IntroductionScreen from '../components/introduction-screen';
import QuestionScreen from '../components/question-screen';

import { fetchQuestionData } from "../actions/fetchQuestionsActions";
import {updateScore} from '../actions/scoreActions';
import {updateProgress} from '../actions/scoreActions';
import {updateSelected} from '../actions/scoreActions';


class QuizConainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
        startQuiz:false
        };
    }

     handleStartQuiz = (startQuiz) => {
        this.setState({
        startQuiz : startQuiz
        })
    }

    componentDidMount() {
        this.props.fetchQuestionData();
    }
    updateSelected = (selected) => {
     this.props.updateSelected(selected);
    //this.setState({selected: answer})
    } 

    updateScore = (score) => {
     this.props.updateScore(score);
    //this.setState({selected: answer})
    }

    updateProgress = (progress) => {
     this.props.updateProgress(progress);
    //this.setState({selected: answer})
    }

    render() {

        const { questionData } = this.props;
        console.log(questionData && questionData.questionsDataResponse && questionData.questionsDataResponse.results && questionData.questionsDataResponse.results[0]);
        if (questionData) {
        if (questionData.isLoading) {
            return <p>Loading…</p>;
        }

        if (this.props.questionData.error) {
            return <p>Sorry! There was an error loading the items</p>;
        }
        }
        return (
        <div>
            <div className="row">
                <div className="col-md-5 col-sm-12">
                    
                    {!this.state.startQuiz ? (
                    <div>
                        <IntroductionScreen handleStartQuiz={this.handleStartQuiz} />
                    </div>
                    )
                    :
                    (
                        <div>
                            <QuestionScreen
                            questionData={questionData}
                            updateSelected={this.updateSelected}
                            selected={this.props.selected}
                            updateProgress={this.updateProgress}
                            progress={this.props.progress}
                            updateScore={this.updateScore}
                            score={this.props.score}
                            />
                          
                        </div>
                    )
                    }
                </div>
            </div>
            
            
        </div>
        )
    }
}
const mapStateToProps = state => ({
  questionData: state.questionData,
  selected:state.selected.selected,
  progress:state.selected.progress,
  score:state.selected.score,
});

const mapDispatchToProps = {
  fetchQuestionData,
  updateSelected,
  updateProgress,
  updateScore
};


export default connect(mapStateToProps, mapDispatchToProps)(QuizConainer);