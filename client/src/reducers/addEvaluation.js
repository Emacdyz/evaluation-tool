//src/reducers/addEvaluation.js
import {ADD_EVALUATION} from '../actions/evaluation'

export default (state = {}, {type, payload}) => {
    switch (type) {

        case ADD_EVALUATION:
              return payload

        default: 
        return state
    }
}