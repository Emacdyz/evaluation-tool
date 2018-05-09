//src/reducers/addbatch.js
import {ADD_BATCH} from '../actions/batches'

export default (state = [], {type, payload}) => {
    switch (type) {

        case ADD_BATCH:
              return payload

        default: 
        return state
    }
}