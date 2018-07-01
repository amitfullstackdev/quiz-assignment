import React, {Component} from 'react'

class ResultScreen extends Component {
  render() {
    return (
      <div>
        <p>{this.props.end_msg}</p>
        <p>Your score was: {this.props.score}</p>
        <button onClick={this.props.retry}>Retry</button>
      </div>
    )
  }
}
export default ResultScreen