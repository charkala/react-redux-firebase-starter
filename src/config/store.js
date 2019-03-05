import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { reduxFirestore, getFirestore } from 'redux-firestore'
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase'
import firebase from './firebase'
import rootReducer from '../reducers'

const middleware = [
  thunk.withExtraArgument({
    getFirebase,
    getFirestore,
  })
]

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(...middleware),
    reduxFirestore(firebase),
    reactReduxFirebase(firebase, {
      useFirestoreForProfile: true,
      userProfile: 'users',
      attachAuthIsReady: true
    }),
  )
)

export default store