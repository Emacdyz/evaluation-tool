//src/reducers/evaluation
import { GET_STUDENT_BY_ID} from '../actions/student'

export default (state = [], {type, payload}) => {
  
    switch (type) {
      case GET_STUDENT_BY_ID:
        return payload

    default:
      return state
  }
}