//src/reducers/fetchStudents.js
import { GET_STUDENTS } from '../actions/student'

export default (state = null, {type, payload}) => {
    switch (type) {
      case GET_STUDENTS:
        return payload
    
  
      default:
        return state
    }
  }