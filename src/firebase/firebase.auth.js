import { getAuth } from 'firebase/auth';
import app from './firebase.config';

const auth = getAuth(app);

export default auth;

// // Import the functions you need from the SDKs you need
// import { getApp, getApps, initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyD5grct-XuhFr0Kd19RNhIkH95B-V-Cw80",
//     authDomain: "ydjobs0.firebaseapp.com",
//     projectId: "ydjobs0",
//     storageBucket: "ydjobs0.appspot.com",
//     messagingSenderId: "256495542401",
//     appId: "1:256495542401:web:514812e521542172bead80"
// };
// const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// // Initialize Firebase
// export default app;



// apiKey: process.env.REACT_APP_apiKey,
//     authDomain: process.env.REACT_APP_authDomain,
//     projectId: process.env.REACT_APP_projectId,
//     storageBucket: process.env.REACT_APP_storageBucket,
//     messagingSenderId: process.env.REACT_APP_messagingSenderId,
//     appId: process.env.REACT_APP_appId


