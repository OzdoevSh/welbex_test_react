import { SET_TODOS, ERROR} from '../types'

const initialState = {
  todos: [],
  error: "",
  loading: true,
}

export default function getTodos(state = initialState, action){
  switch(action.type){
    case SET_TODOS:
    return {
      ...state,
      todos: action.payload,
      loading: false,
    }
    case ERROR:
    return{
      ...state,
      error: action.payload,
      loading: false
    }
      default: return state
    }

}