import { IS_ADDED, ERROR } from '../types'
import axios from 'axios'

export const addTodo = (id, user_id, title, completed) => async dispatch => {
  try{
    const res = await axios.post(`https://jsonplaceholder.typicode.com/todos`, {id, user_id, title, completed})
    console.log(res)
    dispatch( {
        type: IS_ADDED,
        payload: res
    })
  }

  catch(e){
    dispatch( {
      type: ERROR,
      payload: console.log(e),
    })
  }

}
