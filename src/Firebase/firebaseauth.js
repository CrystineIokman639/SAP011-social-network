import {
  signInWithEmailAndPassword, 
  signInWithPopup, GoogleAuthProvider, 
  createUserWithEmailAndPassword, getAuth
} from 'firebase/auth'; 
import {
  setDoc, doc,
} from "firebase/firestore";
import {
  db,
} from "../Firebase/firebase.config";
import { auth, app } from './firebase.config';


function authLogin(email, password) { 
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = JSON.stringify(userCredential.user);
      window.localStorage.setItem("auth", user)
      window.location.href = "/#feed"
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
}

function authByGoogle() {
  const provider = new GoogleAuthProvider()
  signInWithPopup(auth, provider)
    .then((result) => {
      // acrescentei os dados a baixo para ir para o feed
      const user = JSON.stringify(result.user);
      window.localStorage.setItem("auth", user)
      window.location.href = "/#feed"

    }).catch((error) => {
      console.log(error)
    });
}
// recupera os dados de autenticação do usuario
export function getUserData() {
  return auth.currentUser
}

// cadastro
const registerUser = async (nickname, email, password) => {
  try {
    const auth2 = getAuth(app);
    await createUserWithEmailAndPassword(auth, email, password).then((user) => {
      console.log(user)
    });
    await updateProfile(auth2.currentUser.uid, {
      displayName: nickname,
    });
    const userData = {
      id: auth2.currentUser.uid,
      nickname,
      email,
    };
    await setDoc(doc(db, 'users', `${email}`), userData);
  } catch (error) {
    console.log('Erro ao cadastrar usuário:', error.message);
  }
  window.location.href = "../#feed"
};

export { authLogin, authByGoogle, registerUser }