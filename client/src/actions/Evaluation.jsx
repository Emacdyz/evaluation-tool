//src/actions/Evaluation.jsx
import * as request from 'superagent'
import {baseUrl} from '../constants'
import {logout} from './users'
import {isExpired} from '../jwt'

export const ADD_EVALUATION = 'ADD_EVALUATION'
export const EDIT_EVALUATION = 'EDIT_EVALUATION'
export const GET_EVALUATION = 'GET_EVALUATION'

const fetchEvaluations = evaluations => ({
    type: GET_EVALUATION,
    payload: evaluations
})

const postEvaluation = evaluation => ({
    type: ADD_EVALUATION,
    payload: evaluation
})

const patchEvaluation = evaluation => ({
    type: EDIT_EVALUATION,
    payload: evaluation
})

export const getEvaluations = () => (dispatch, getState) => {
    const state = getState()
    if (!state.currentUser) return null
    const jwt = state.currentUser.jwt
  
    if (isExpired(jwt)) return dispatch(logout())
  
    request
      .get(`${baseUrl}/evaluation`)
      .set('Authorization', `Bearer ${jwt}`)
      .then(result => dispatch(fetchEvaluations(result.body)))
      .catch(err => console.error(err))
}

export const addEvaluation = (evaluation) => (dispatch, getState) => {
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

export const editEvaluation = (patch, studentId) => (dispatch, getState) => {
    console.log(patch, studentId)
    const state = getState()
    const jwt = state.currentUser.jwt
  
    request
      .patch(`${baseUrl}/evaluation/${studentId}`)
      .set('Authorization', `Bearer ${jwt}`)
      .send(patch)
      .then(response => dispatch(patchEvaluation(response.body)))
      .catch(err => console.log(err))
}