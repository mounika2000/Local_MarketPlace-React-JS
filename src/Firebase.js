import firebase from 'firebase'
// fill your firebase database info here
const config={
  apiKey: "your_api_key",
  authDomain: "your_auth_domain",
  databaseURL: " your databse URL",
  projectId: "your project ID",
  storageBucket: "storage bucket details",
  messagingSenderId: "messaging sender ID",
  appId: "your app ID",
}

firebase.initializeApp(config)
export const auth=firebase.auth()
export const db=firebase.firestore()
export const storage=firebase.storage()
export const database=firebase.database()