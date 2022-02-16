import { IS_DELETED, ERROR } from '../types'
import axios from 'axios'

export const deleteTodo = (id) => async dispatch => {
  try{
    const res = await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    console.log(res)
    dispatch( {
        type: IS_DELETED,
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
