//src/actions/batches.jsx
import * as request from 'superagent'
import {baseUrl} from '../constants'
import {logout} from './users'
import {isExpired} from '../jwt'

export const GET_BATCHES = 'GET_BATCHES'
export const ADD_BATCH = 'ADD_BATCH'

const fetchBatches = batches => ({
    type: GET_BATCHES,
    payload: batches
})
  
const createBatch = batch => ({
    type: ADD_BATCH,
    payload: batch
})

export const getBatches = () => (dispatch, getState) => {
    const state = getState()
    if (!state.currentUser) return null
    const jwt = state.currentUser.jwt
  
    if (isExpired(jwt)) return dispatch(logout())
  
    request
      .get(`${baseUrl}/batches`)
      .set('Authorization', `Bearer ${jwt}`)
      .then(result => dispatch(fetchBatches(result.body)))
      .catch(err => console.error(err))
}

export const addBatch = (data) => (dispatch, getState) => {
    console.log(data)
    const state = getState()
    const jwt = state.currentUser.jwt
  
    if (isExpired(jwt)) return dispatch(logout())
  
    request
      .post(`${baseUrl}/batches`)
      .set('Authorization', `Bearer ${jwt}`)
      .send(data)
      .then(result => dispatch(createBatch(data)))
      .catch(err => console.error(err))
}