import {
  PROJECT_CREATE_SUCCESS,
  PROJECT_CREATE_ERROR,
} from './types'

export const createProject = (project) => (dispatch, getState, { getFirebase, getFirestore}) => {
  const firestore = getFirestore()
  const profile = getState().firebase.profile
  const authorId = getState().firebase.auth.uid
  
  firestore.collection('projects').add({
    ...project,
    authorFirstName: profile.firstName,
    authorLastName: profile.lastName,
    authorId: authorId,
    createdAt: new Date()
  })
  .then(() => dispatch({
    type: PROJECT_CREATE_SUCCESS,
    payload: project
  }))
  .catch(err => dispatch({
    type: PROJECT_CREATE_ERROR,
    payload: err
  }))
  
}