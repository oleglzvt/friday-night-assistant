import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyBNowU0ANWey7jm0n4QgDUn4X9SD8cGu7A",
    authDomain: "friday-night-assistant.firebaseapp.com",
    databaseURL: "https://friday-night-assistant.firebaseio.com",
    projectId: "friday-night-assistant",
    storageBucket: "friday-night-assistant.appspot.com",
    messagingSenderId: "753588861739",
    appId: "1:753588861739:web:ddfa92c85669e8ab24636e"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;