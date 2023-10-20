import { signInWithEmailAndPassword,signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword } from 'firebase/auth';
import {auth, app} from './firebase.config';


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
    // acrescentei os dados a baixo para ir para o feed
    const user = JSON.stringify(result.user);
    window.localStorage.setItem("auth",user)
    window.location.href="/#feed"

  }).catch((error) => {
    console.log(error)
  });
}
// recupera os dados de autenticação do usuario
function getUserData(){
  let data=window.localStorage.getItem("auth");
  return JSON.parse(data);
}

// cadastro
const registerUser = async ( nickname, email, password) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password).then((user) => {
      console.log(user)
    });
    // await updateProfile(auth2.currentUser, {
    //   displayName: username,
    // });
    // const userData = {
    //   id: auth2.currentUser.uid,
    //   username,
    //   email,
    // };
    // await setDoc(doc(db, 'users', `${email}`), userData);
  } catch (error) {
    console.log('Erro ao cadastrar usuário:', error.message);
  }
  window.location.href="../#login"
};

export {authLogin, authByGoogle, registerUser}