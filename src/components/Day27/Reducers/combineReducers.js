import todoReducer from "./Reducers";
import { combineReducers } from "redux";

const rootReducer = combineReducers({

    todo:todoReducer,
})

export default rootReducer;