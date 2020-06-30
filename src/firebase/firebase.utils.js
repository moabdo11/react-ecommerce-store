import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config =  {
    apiKey: "AIzaSyCf9k5sqycQJHdeTPqEpe07X37LtCxrSdM",
    authDomain: "react-clothing-db-563f1.firebaseapp.com",
    databaseURL: "https://react-clothing-db-563f1.firebaseio.com",
    projectId: "react-clothing-db-563f1",
    storageBucket: "react-clothing-db-563f1.appspot.com",
    messagingSenderId: "847694711529",
    appId: "1:847694711529:web:39d719b59742b0a0e0be78"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
      if (!userAuth) return;

      const userRef = firestore.doc(`users/${userAuth.uid}`);

      const snapShot = await userRef.get();

        if (!snapShot.exists) {
            const  { displayName, email } = userAuth;
            const createdAt = new Date();

            try {
                await userRef.set({
                    displayName, 
                    email,
                    createdAt,
                    ...additionalData
                }) 
            } catch(error) {
                console.log('error creating user', error.message)
            }
        }

        return userRef;

  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;