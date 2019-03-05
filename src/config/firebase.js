import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

/**
 * Initialize Firebase
 * @see https://console.firebase.google.com/
 */
var config = {
  apiKey: "AIzaSyAyEQfPD3NBazEDJHOP8eM65_KJBm4MKHs",
  authDomain: "react-redux-firebase-kit.firebaseapp.com",
  databaseURL: "https://react-redux-firebase-kit.firebaseio.com",
  projectId: "react-redux-firebase-kit",
  storageBucket: "react-redux-firebase-kit.appspot.com",
  messagingSenderId: "1063423198112"
}

firebase.initializeApp(config)
firebase.firestore().settings({
  timestampsInSnapshots: true
})

export default firebase