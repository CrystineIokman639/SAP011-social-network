import { signInWithEmailAndPassword } from 'firebase/auth';
import {auth,app} from './firebase.config';

function authLogin (email,password){
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
}

export {authLogin}