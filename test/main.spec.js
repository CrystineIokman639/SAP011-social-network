// importamos la funcion que vamos a testear
import { authLogin, authByGoogle, registerUser } from '../src/Firebase/firebaseauth';
import { authByGoogle, authLogin, registerUser } from '../src/firebase/firebaseauth';
// import {
//   collection, getPosts, renderPosts
// } from 'firebase/firestore';


const mock = {
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
