import {signInWithEmailAndPassword} from 'firebase/auth';
import {auth, app} from 'firebase/app';

function authLogin (){
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