import React, {Component} from 'react'

class IntroductionScreen extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2>Quiz</h2>
        <p>
          Welcome to the Trivia Challenge!" "You will be presented with 10 True or False
          Questions" "Can you score 100%?"
        </p>
        <button onClick={() => this.props.handleStartQuiz(true)}>Start Quiz</button>

      </div>
    )
  }
}
export default IntroductionScreen;