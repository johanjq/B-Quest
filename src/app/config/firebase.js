import firebase from 'firebase';
import 'firebase/firestore';
//storageBucket: "bquest-3beb9.appspot.com",

const firebaseConfig = {
    apiKey: "AIzaSyCppLe6H68_mf9u0BGZIkaJjZ_vKT9hAJA",
    authDomain: "bquest-3beb9.firebaseapp.com",
    databaseURL: "https://bquest-3beb9.firebaseio.com",
    projectId: "bquest-3beb9",
    storageBucket: "bquest-3beb9.appspot.com",
    messagingSenderId: "457817658743"
}

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;