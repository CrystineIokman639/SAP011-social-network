import {auth, app} from './firebase.config';
import {SignInWithEmailandPassword} from 'firebase/auth';


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