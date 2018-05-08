//src/reducers/fetchbatches.js
import { GET_BATCHES} from '../actions/batches'

export default (state = null, {type, payload}) => {
  switch (type) {
    case GET_BATCHES:
      return payload.reduce((batches, batch) => {
        batches[batch.id] = batch
        return batches
    }, {})
  

    default:
      return state
  }
}