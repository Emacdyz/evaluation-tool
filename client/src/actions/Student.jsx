//src/actions/Student.jsx
import * as request from 'superagent'
import {baseUrl} from '../constants'
import {logout} from './users'
import {isExpired} from '../jwt'

export const GET_STUDENTS = 'GET_STUDENTS'
export const ADD_NEW_STUDENT = 'ADD_NEW_STUDENT'

const fetchStudents = students => ({
    type: GET_STUDENTS,
    payload: students
})
  
const postStudent = student => ({
    type: ADD_NEW_STUDENT,
    payload: student
})

export const getStudents = () => (dispatch, getState) => {
    const state = getState()
    if (!state.currentUser) return null
    const jwt = state.currentUser.jwt
  
    if (isExpired(jwt)) return dispatch(logout())
  
    request
      .get(`${baseUrl}/students`)
      .set('Authorization', `Bearer ${jwt}`)
      .then(result => dispatch(fetchStudents(result.body)))
      .catch(err => console.error(err))
}

export const addStudent = (student) => (dispatch, getState) => {
    console.log(student)
    const state = getState()
    const jwt = state.currentUser.jwt
  
    if (isExpired(jwt)) return dispatch(logout())
  
    request
      .post(`${baseUrl}/students`)
      .set('Authorization', `Bearer ${jwt}`)
      .send(student)
      .then(result => dispatch(postStudent(student)))
      .catch(err => console.error(err))
}