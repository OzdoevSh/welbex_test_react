import { combineReducers } from 'redux'

import getTodos from './getTodos'

const rootReducer = combineReducers({
  todos: getTodos,
})

export default rootReducer