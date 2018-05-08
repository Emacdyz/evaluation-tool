//src/reducers/student.js
import {ADD_NEW_STUDENT} from '../actions/student'

export default (state = {}, {type, payload}) => {
    switch (type) {

        case ADD_NEW_STUDENT:
              return payload

        default: 
        return state
    }
}
