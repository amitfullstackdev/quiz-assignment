import {combineReducers} from "redux";
import questionData from "./fetchQuestionsReducer";

import ScoreUpdateReducer from './scoreupdate-reducer';

const rootReducer = combineReducers({questionData, selected: ScoreUpdateReducer});

export default rootReducer;