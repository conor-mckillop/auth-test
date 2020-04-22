import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/firestore";

const config = {
    apiKey: "AIzaSyCzKtiHWUkI260wQg9UESHPqcMkrGmemz0",
    authDomain: "test-auth-3b497.firebaseapp.com",
    databaseURL: "https://test-auth-3b497.firebaseio.com",
    projectId: "test-auth-3b497",
    storageBucket: "test-auth-3b497.appspot.com",
    messagingSenderId: "567136153801",
    appId: "1:567136153801:web:f9377b28c92a989b11dd18"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const signInWithProvider = async (provider) => {
    try {
        const response = await auth.signInWithPopup(provider);
        console.log('Logged in successfully', response);
    } catch (error) {
        console.log('Error logging in with provider', error);
    }   
};

export const signInWithGoogle = async () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    await signInWithProvider(googleProvider);
};

export const signInWithFacebook = async () => {
    const facebookProvider = new firebase.auth.FacebookAuthProvider();
    await signInWithProvider(facebookProvider);
};