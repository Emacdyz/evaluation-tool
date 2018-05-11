//src/actions/Student.jsx
import * as request from 'superagent'
import {baseUrl} from '../constants'
import {logout} from './users'
import {isExpired} from '../jwt'

export const GET_STUDENTS = 'GET_STUDENTS'
export const GET_STUDENT_BY_ID = 'GET_STUDENT_BY_ID'
export const ADD_NEW_STUDENT = 'ADD_NEW_STUDENT'
export const DELETE_STUDENT = 'DELETE_STUDENT'

const fetchStudents = students => ({
    type: GET_STUDENTS,
    payload: students
})

const fetchOneStudent = studentId => ({
    type: GET_STUDENT_BY_ID,
    payload: studentId
})
  
const postStudent = student => ({
    type: ADD_NEW_STUDENT,
    payload: student
})

const removeStudent = student => ({
    type: DELETE_STUDENT,
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

export const getStudentById = (studentId) => (dispatch, getState) => {
    const state = getState()
    if (!state.currentUser) return null
    const jwt = state.currentUser.jwt
  
    if (isExpired(jwt)) return dispatch(logout())

    request
      .get(`${baseUrl}/students/${studentId}`)
      .set('Authorization', `Bearer ${jwt}`)
      .then(response => dispatch(fetchOneStudent(response.body)))
      .catch(err => alert(err))
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

export const deleteStudent = (studentId) => (dispatch) => {
    console.log(studentId)
    request
      .delete(`${baseUrl}/students/${studentId}`) 
      .then(result => dispatch(removeStudent(studentId)))
      .catch(err => console.error(err))
}