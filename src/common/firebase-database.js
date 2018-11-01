import firebase from 'firebase'
const config = {
    apiKey: "AIzaSyDdAezV3lAI82DbALtboUmzkRgSm6487xU",
    authDomain: "fir-project-1540458574542.firebaseapp.com",
    databaseURL: "https://fir-project-1540458574542.firebaseio.com",
    projectId: "firebase-project-1540458574542",
    storageBucket: "firebase-project-1540458574542.appspot.com",
    messagingSenderId: "639285828022"
};
firebase.initializeApp(config);
const database = firebase.database()
export default database