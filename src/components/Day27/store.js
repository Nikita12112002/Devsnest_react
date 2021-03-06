import { createStore ,applyMiddleware} from 'redux';
import logger from 'redux-logger';
import rootReducer from "./Reducers/combineReducers";

const store = createStore(rootReducer ,applyMiddleware(logger));

export default store;