import { signInWithEmailAndPassword,signInWithPopup, GoogleAuthProvider  } from 'firebase/auth';
import {auth,app} from './firebase.config';

function authLogin (email,password){
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = JSON.stringify(userCredential.user);
      window.localStorage.setItem("auth",user)
      window.location.href="/#feed"
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
}

function authByGoogle (){
  const provider = new GoogleAuthProvider()
  signInWithPopup(auth, provider)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    // acrescentei os dados a baixo para ir para o feed
    const user = JSON.stringify(result.user);
    window.localStorage.setItem("auth",user)
    window.location.href="/#feed"

  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
  });
}
// recupera os dados de autenticação do usuario
function getUserData(){
  let data=window.localStorage.getItem("auth");
  return JSON.parse(data);
}

export {authLogin,authByGoogle}