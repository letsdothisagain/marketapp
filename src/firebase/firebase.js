import firebase from 'firebase';

// Initialize Firebase
const  config = {
    apiKey: "AIzaSyDSTdwUHltZnBdMG8KY0ypG-BcJAd6xmnI",
    authDomain: "testapp-85e3d.firebaseapp.com",
    databaseURL: "https://testapp-85e3d.firebaseio.com",
    projectId: "testapp-85e3d",
    storageBucket: "testapp-85e3d.appspot.com",
    messagingSenderId: "274924011041"
};

firebase.initializeApp(config);
const auth = firebase.auth();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
const githubAuthProvider = new firebase.auth.GithubAuthProvider();
const twitterAuthProvider = new firebase.auth.TwitterAuthProvider();

const database = firebase.database();
export {
    auth,
    database,
    googleAuthProvider,
    githubAuthProvider,
    facebookAuthProvider,
    twitterAuthProvider
};