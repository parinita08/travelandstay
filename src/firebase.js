import Firebase from "firebase";
import "firebase/firebase-database";
import "firebase/auth";

const config ={
    apiKey: "AIzaSyBY_SHQsKF4cQhr0aYRe_jnTCS6ZBFFESg",
    authDomain: "travelandstay-8a601.firebaseapp.com",
    databaseURL: "https://travelandstay-8a601.firebaseio.com",
    projectId: "travelandstay-8a601",
    storageBucket: "travelandstay-8a601.appspot.com",
    messagingSenderId: "980911188955",
    appId: "1:980911188955:web:e7ef65300282c5620015fe"
};

const firebase = Firebase.initializeApp(config);

// export { firebase };
export default firebase;