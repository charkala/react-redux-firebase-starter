import {
  LOGIN_SUCCESS, LOGIN_ERROR,
  SIGNOUT_SUCCESS, SIGNUP_SUCCESS, SIGNUP_ERROR
} from '../actions/types'

const initialState = {
  authError: null,
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_ERROR:
      console.log('Login failed')
      return {
        ...state,
        authError: action.err.message
      }
    case LOGIN_SUCCESS:
      console.log('Login success')
      return {
        ...state,
        authError: null,
      }
    case SIGNOUT_SUCCESS:
      console.log('Signout success')
      return state
    case SIGNUP_SUCCESS:
      console.log('Signup success')
      return {
        ...state,
        authError: null
      }
    case SIGNUP_ERROR:
      console.log('Signup failed')
      return {
        ...state,
        authError: action.err.message
      }
    default:
      return state
  }
}

export default authReducer