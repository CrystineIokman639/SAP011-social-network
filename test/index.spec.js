// importamos la funcion que vamos a testear
import { authLogin, authByGoogle, registerUser } from '../src/Firebase/firebaseauth.js';
import {
  signInWithPopup,
  signInWithEmailAndPassword,
  signOut,
  auth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile,
} from '../src/Firebase/firebase/auth';

// import {
//   setDoc, doc, deleteDoc, updateDoc, collection, getDocs, orderBy, query, serverTimestamp,
//   getDoc, db, where,
// } from 'firebase/firestore';

import {
  signInWithGoogle,
  signInWithGitHub,
  authLogin,
  logOut,
  registerUserWithAnotherProvider,
  registerUser,
  isUserLoggedIn,
  deletePost,
  editPost,
  calculateTimeAgo,
  createPost,
  listAllPosts,
  likePost,
  deslikePost,
  checkLikedPosts,
  changeNickNameAllPosts,
  editProfile,
} from '../src/firebase/firebase.js';

const mockAuth = {
  currentUser: {
    displayName: 'Spock',
    email: 'spock@gmail.com',
    uid: '3141592',
    password: 'Senha@123',
    data: () => ({
      username: 'maria',
    }),
  },
};

describe('authLogin', () => {
  it('debería ser una función', () => {
    expect(typeof authLogin).toBe('function');
  });
});
