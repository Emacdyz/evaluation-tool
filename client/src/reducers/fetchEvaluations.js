//src/reducers/fetchEvaluations.js
import { GET_EVALUATION, ADD_EVALUATION} from '../actions/evaluation'

export default (state = null, {type, payload}) => {
  
    switch (type) {
      case GET_EVALUATION:
        return payload
  
      case ADD_EVALUATION:
        return state.concat(payload)

    default:
      return state
  }
}