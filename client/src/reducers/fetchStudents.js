//src/reducers/fetchStudents.js
import { GET_STUDENTS, ADD_NEW_STUDENT,  DELETE_STUDENT } from '../actions/student'

export default (state = null, {type, payload}) => {
    switch (type) {
      case GET_STUDENTS:
        return payload

      case ADD_NEW_STUDENT:
        return state.concat(payload)

      case DELETE_STUDENT:
        return state.splice(payload.id)
    
      default:
        return state
    }
}