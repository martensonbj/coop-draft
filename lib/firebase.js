const firebase = require('firebase')

const config = {
  apiKey: "AIzaSyA3zIgB_epfXUOXLPDMqNJuFV1yVvoXhcw",
  authDomain: "coop-draft.firebaseapp.com",
  databaseURL: "https://coop-draft.firebaseio.com",
  storageBucket: "",
};

firebase.initializeApp(config)

export default firebase

export const provider = new firebase.auth.GoogleAuthProvider()
