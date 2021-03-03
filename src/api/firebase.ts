import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'
import { COLLECTION } from '../constants'
import { ROUTES } from './constants'

const firebaseConfig = {
  apiKey: 'AIzaSyAB6N8qQXo3HQZpvB588TqGYy69WMcSe9w',
  authDomain: 'fir-screen-7eb42.firebaseapp.com',
  databaseURL:
    'https://fir-screen-7eb42-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'fir-screen-7eb42',
  storageBucket: 'fir-screen-7eb42.appspot.com',
  messagingSenderId: '787647302542',
  appId: '1:787647302542:web:7692936158078af00632df',
  measurementId: 'G-2DQCJVJV6N',
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const firestore = firebase.firestore()
export const fireDB = firebase.database()

const provider = new firebase.auth.GoogleAuthProvider()
export const signInWithGoogle = (history: any) =>
  auth.signInWithPopup(provider).then(() => {
    history.push(ROUTES.ADMIN_HOME)
  })

// @ts-ignore
export const generateUserDocument = async (user) => {
  if (!user) return

  const userRef = firestore.doc(`${COLLECTION.USERS}/${user.uid}`)
  const snapshot = await userRef.get()

  if (!snapshot.exists) {
    const { email, displayName, photoURL } = user
    try {
      await userRef.set({
        displayName,
        email,
        photoURL,
      })
    } catch (error) {
      console.error('Error creating user document', error)
    }
  }
  return getUserDocument(user.uid)
}

// @ts-ignore
const getUserDocument = async (uid) => {
  if (!uid) return null
  try {
    const userDocument = await firestore.doc(`${COLLECTION.USERS}/${uid}`).get()

    return {
      uid,
      ...userDocument.data(),
    }
  } catch (error) {
    console.error('Error fetching user', error)
  }
}
