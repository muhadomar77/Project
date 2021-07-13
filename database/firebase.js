// database/firebaseDb.js

import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAgv0vct7gHu7bDfYawfQOZoVPebLWE_CU",
    authDomain: "moveon-d6c46.firebaseapp.com",
    databaseURL: "https://moveon-d6c46.firebaseio.com",
    projectId: "moveon-d6c46",
    storageBucket: "moveon-d6c46.appspot.com",
    messagingSenderId: "354116225521",
    appId: "1:354116225521:web:48a371cfc4ef9032b8dc50",
    measurementId: "G-MHPPWDSR80"
};

firebase.initializeApp(firebaseConfig);

export default firebase;