import * as types from "../constants/actionTypes";
import initialState from "./initialState";

const fetchQuestionsReducer = (state = initialState.questionData, action) => {
  switch (action.type) {
    case types.FETCH_QUESTION_INFO_STARTED:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.FETCH_QUESTION_INFO_SUCCEEDED:
      return {
        ...state,
        questionsDataResponse: action.payload,
        isLoading: false
      };
    case types.FETCH_QUESTION_INFO_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };

    default:
      return state;
  }
};

export default fetchQuestionsReducer;
