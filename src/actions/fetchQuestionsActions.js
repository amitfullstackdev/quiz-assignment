import * as quizService from "../services/quizService";
import * as types from "../constants/actionTypes";

export const fetchQuestionDataStarted = () => ({type: types.FETCH_QUESTION_INFO_STARTED});

export const fetchQuestionDataSucceeded = data => ({type: types.FETCH_QUESTION_INFO_SUCCEEDED, payload: data});

export const fetchQuestionDataFailed = error => ({type: types.FETCH_QUESTION_INFO_FAILED, payload: error, error: true});

// Async action creator using thunk middleware
export const fetchQuestionData = () => dispatch => {
  dispatch(fetchQuestionDataStarted());

  return quizService
    .getQuestionDetails()
    .then(response => {
      dispatch(fetchQuestionDataSucceeded(response.data));
    }, error => {
      // Do not use catch - see
      // https://github.com/facebook/react/issues/7617#issuecomment-247710003
      dispatch(fetchQuestionDataFailed(error));
      //dispatch(fetchAccountDataSucceeded(accoutJson));
    });
};
