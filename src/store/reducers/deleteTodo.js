import {
  IS_DELETED,
  ERROR
} from '../types'

const initialState = {
  success: false
}

export default function deleteTodo(state = initialState, action) {
  switch (action.type) {
    case IS_DELETED:
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