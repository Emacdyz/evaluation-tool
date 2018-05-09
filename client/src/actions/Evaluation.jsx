//src/actions/Evaluation.jsx
import * as request from 'superagent'
import {baseUrl} from '../constants'
import {logout} from './users'
import {isExpired} from '../jwt'

export const ADD_EVALUATION = 'ADD_EVALUATION'

const postEvaluation = evaluation => ({
    type: ADD_EVALUATION,
    payload: evaluation
})

export const addEvaluation = (evaluation) => (dispatch, getState) => {
    console.log(evaluation)
    const state = getState()
    const jwt = state.currentUser.jwt
  
    if (isExpired(jwt)) return dispatch(logout())
  
    request
      .post(`${baseUrl}/evaluation`)
      .set('Authorization', `Bearer ${jwt}`)
      .send(evaluation)
      .then(result => dispatch(postEvaluation(evaluation)))
      .catch(err => console.error(err))
}