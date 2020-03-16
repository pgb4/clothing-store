import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDbcStkyIhu-yfBxHNVMIKD70RAUHog3Vs",
    authDomain: "clothing-store-bb58d.firebaseapp.com",
    databaseURL: "https://clothing-store-bb58d.firebaseio.com",
    projectId: "clothing-store-bb58d",
    storageBucket: "clothing-store-bb58d.appspot.com",
    messagingSenderId: "1066232042303",
    appId: "1:1066232042303:web:b38466b191b6d39c66b98a",
    measurementId: "G-P71JWW8R3J"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get()

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
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

    return userRef
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider =  new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase