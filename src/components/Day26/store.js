import { createStore } from 'redux'
import { userFromReducer } from "./Reducer";

const store = createStore(userFromReducer)

export default store