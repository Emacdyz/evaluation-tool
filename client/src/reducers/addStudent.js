//src/reducers/student.js
import {ADD_NEW_STUDENT} from '../actions/student'
import {EDIT_EVALUATION} from '../actions/evaluation'

export default (state = [], {type, payload}) => {
    switch (type) {

        case ADD_NEW_STUDENT:
            return payload
        
        case EDIT_EVALUATION:
            return state.map(student => {
                if (student.id === payload.id) {
                    return payload 
                } else return student
          })
        default: 
        return state
    }
}
