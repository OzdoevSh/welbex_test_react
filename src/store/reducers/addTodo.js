import {
  IS_ADDED,
  ERROR
} from '../types'

const initialState = {
  success: false
}

export default function addTodo(state = initialState, action) {
  switch (action.type) {
    case IS_ADDED:
      return {
        ...state,
        success: true
      }
    case ERROR:
      return {
        ...state,
        success: false
      }
    default: return state
  }
}