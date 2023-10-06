import { signInWithEmailAndPassword,signInWithPopup, GoogleAuthProvider  } from 'firebase/auth';
import {auth, app} from './firebase.config';
// import {SignInWithEmailandPassword} from 'firebase/auth';


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

// cadastro
const registerUser = async ( nickname, email, password) => {
  try {
    const auth2 = getAuth(app);
    await createUserWithEmailAndPassword(auth2, email, password);
    await updateProfile(auth2.currentUser, {
      displayName: username, photoURL: 'https://firebasestorage.googleapis.com/v0/b/gamee-97311.appspot.com/o/profilePicture%2Fprofile-icon-gradient.svg?alt=media&token=6266a90b-2334-4acc-b982-e97274d7fd76&_gl=1*clwqi6*_ga*MjA2OTc4NjIxMy4xNjk1ODM3OTI5*_ga_CW55HF8NVT*MTY5NTgzNzkyOS4xLjEuMTY5NTg0MTkwMi4zMy4wLjA.',
    });
    const userData = {
      id: auth2.currentUser.uid,
      nickname,
      email,
      photoURL: 'https://firebasestorage.googleapis.com/v0/b/gamee-97311.appspot.com/o/profilePicture%2Fprofile-icon.svg?alt=media&token=f6e9d0db-463a-4d7f-95b3-117c1465b7f6&_gl=1*1mxa0ic*_ga*MjA2OTc4NjIxMy4xNjk1ODM3OTI5*_ga_CW55HF8NVT*MTY5NTgzNzkyOS4xLjEuMTY5NTg0MTkyMC4xNS4wLjA.',
    };
    await setDoc(doc(db, 'users', `${email}`), userData);
  } catch (error) {
    console.log('Erro ao cadastrar usuário:', error.message);
  }
  // window.location.href="../#feed"
};

export {authLogin, authByGoogle, registerUser}