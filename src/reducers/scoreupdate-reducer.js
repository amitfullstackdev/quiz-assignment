import {UPDATE_SCORE} from '../actions/scoreActions';
import {UPDATE_PROGRESS} from '../actions/scoreActions';
import {UPDATE_SELECTED} from '../actions/scoreActions';
import initialState from "./initialState";

export default function (state = initialState.questionData, action) {
    switch (action.type) {
        case UPDATE_SELECTED:
            {
                return {
                    ...state,
                    selected: action.payload,
                    isLoading: false
                };

            }
        case UPDATE_PROGRESS:
            {
                return {
                    ...state,
                    progress: action.payload,
                    isLoading: false
                };
                // return Object.assign({}, state, { selected: action.payload });
            }
        case UPDATE_SCORE:
            {
                return {
                    ...state,
                    score: action.payload,
                    isLoading: false
                };

            }
        default:
            {
                return {selected: state.selected, progress: state.progress, score: state.score};
            }
    }
}
