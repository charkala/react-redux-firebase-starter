import {
  PROJECT_CREATE_SUCCESS,
  PROJECT_CREATE_ERROR,
} from '../actions/types'

import { projects } from '../utils/constants'

const initialState = {
  projects
}

const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case PROJECT_CREATE_SUCCESS:
      console.log('create project', action.payload)
      return state
    case PROJECT_CREATE_ERROR:
      console.log('create project error', action.payload)
      return state
    default:
      return state
  }
}

export default projectReducer