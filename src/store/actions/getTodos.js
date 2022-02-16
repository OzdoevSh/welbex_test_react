import { ERROR, SET_TODOS} from '../types'
import axios from 'axios'

export const getTodos = (start, limit) => async dispatch => {
  try{
    const res = await axios.get(`https://jsonplaceholder.typicode.com/todos?_start=${start}&_limit=${limit}`)
    console.log(res)
    dispatch( {
        type: SET_TODOS,
        payload: res.data,
    })
}
  catch(e){
      dispatch( {
          type: ERROR,
          payload: console.log(e),
      })
  }

}

/// todos?_start=0&_limit=10