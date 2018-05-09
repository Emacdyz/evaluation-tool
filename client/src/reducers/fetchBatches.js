//src/reducers/fetchbatches.js
import { GET_BATCHES, ADD_BATCH} from '../actions/batches'

export default (state = null, {type, payload}) => {
  
    switch (type) {
      case GET_BATCHES:
        return payload
  
      case ADD_BATCH:
        return state.concat(payload)

    default:
      return state
  }
}