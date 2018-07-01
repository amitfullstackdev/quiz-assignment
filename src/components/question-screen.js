import React, {Component} from 'react'
import ResultScreen from '../components/result-screen';
import {connect} from "react-redux";

//import {updateScore} from '../actions/scoreActions';

class QuestionScreen extends Component {

  constructor(props) {
    super(props)
  }

  submitAnswer = () => {
    const questionsDataArr = this.props.questionData.questionsDataResponse.results
    if (this.props.selected === questionsDataArr[this.props.progress].correct_answer.toLowerCase()) {
      this
        .props
        .updateScore(this.props.score + 1);

    }
    this
      .props
      .updateSelected('None yet!');
    this
      .props
      .updateProgress(this.props.progress + 1);
  }

  retryQuiz = () => {
    this
      .props
      .updateScore(0);
    this
      .props
      .updateSelected('None yet!');
    this
      .props
      .updateProgress(0);
  }

  render() {
    const {questionData} = this.props;
    const questionsDataObj = questionData.questionsDataResponse.results;
    return (
      <div className="App">

        <div>
          {this.props.progress < questionsDataObj.length
            ? (
              <div>
                <h3>{questionsDataObj[this.props.progress].category}</h3>
                <h4>{questionsDataObj[this.props.progress].question}</h4>
                <p>{this.props.progress + 1}/{questionsDataObj.length}</p>
                <div>
                  <span>
                    <button onClick={() => this.props.updateSelected('true')}>True</button>
                    <button onClick={() => this.props.updateSelected('false')}>False</button>
                  </span>
                  <br/>
                  <br/>
                  <p>You have selected: {this.props.selected}</p>

                  <button onClick={this.submitAnswer}>Submit</button>
                </div>
              </div>
            )
            : (
              <div>
                <ResultScreen
                  score={this.props.score}
                  end_message="Congratulations, you have finished!"
                  retry={this.retryQuiz}/>
              </div>

            )}
        </div>

      </div>
    )
  }
}

export default QuestionScreen;