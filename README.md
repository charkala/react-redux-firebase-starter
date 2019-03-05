# React + Redux + Firebase Starter

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

This project was boostrapped with [Create React App](https://github.com/facebook/create-react-app).

## Installation

```
git clone https://github.com/charkala/react-redux-firebase-starter.git
cd react-redux-firebase-starter
yarn install
yarn start
```


## Firestore Rules

Database rules sample:

```
service cloud.firestore {
  match /databases/{database}/documents {
    match /projects/{project} {
      allow read, write: if request.auth.uid != null
    }
    match /users/{userId} {
      allow create
      allow read: if request.auth.uid != null
      allow write: if request.auth.uid == userId
    }
  }
}
```
