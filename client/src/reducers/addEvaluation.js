//src/reducers/addEvaluation.js
import {ADD_EVALUATION, EDIT_EVALUATION} from '../actions/evaluation'

export default (state = [], {type, payload}) => {
    switch (type) {

        case ADD_EVALUATION:
            return payload

        case EDIT_EVALUATION:
            return state.map(evaluation => {
                if (evaluation.studentId === payload.id) {
                    return payload 
                } else return evaluation 
            })

        default: 
        return state
    }
}

