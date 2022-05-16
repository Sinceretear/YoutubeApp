// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAfQG37E1b2RjKf4OLY2XlD5iT7Vf3pQE",
  authDomain: "app-4967c.firebaseapp.com",
  projectId: "app-4967c",
  storageBucket: "app-4967c.appspot.com",
  messagingSenderId: "1097597575774",
  appId: "1:1097597575774:web:4f6ac2d68061fff0418acf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

function Redirect() {
  let navigate = useNavigate();
  navigate('/pages/Dashboard.js')
}

export const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
        console.log(result);
        const name = result.user.displayName;
        const email = result.user.email;
        const profilePic = result.user.photoURL;

        //local browser storage
        localStorage.setItem('name', name);
        localStorage.setItem('email', email);
        localStorage.setItem('profilePic', profilePic);

        Redirect()

    }).catch((error) => {
        console.log(error);
    });
};
