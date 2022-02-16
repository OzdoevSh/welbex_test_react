import { ERROR} from '../types'
import axios from 'axios'

export const editTodo = (id, title, completed) => async dispatch => {
  try{
    await axios.patch(`http://localhost:3004/contacts/${id}`, {title})
  } 
  catch(e){
      dispatch( {
          type: ERROR,
          payload: console.log(e),
      })
  }

}