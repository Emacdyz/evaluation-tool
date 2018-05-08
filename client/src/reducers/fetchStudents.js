//src/reducers/fetchStudents.js
import { GET_STUDENTS } from '../actions/student'

export default (state = null, {type, payload}) => {
    switch (type) {
      case GET_STUDENTS:
        return payload.reduce((students, student) => {
          students[student.id] = student
          return students
      }, {})
    
  
      default:
        return state
    }
}