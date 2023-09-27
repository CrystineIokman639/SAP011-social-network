// import { authLogin } from "../../Firebase/firebaseauth";
import './login.css';

export default () => {
const user = document.createElement('section');
const loginTemplate = `
  <section class="container">
    <header>
      <img class="booknook" src="img/logo2.png" alt="logo da rede social" width="250">
    </header>

    <nav class="form-container">
      <form id="email-login">
        <h1>entrar</h1>
        <section class="email2">
         <input class="login1" id="email" type="email" placeholder="e-mail">
         <span id="email-alert" class="email-error"></span>
        </section>
        <section class="passwordDad">
         <input id="password" class="pass" type="password" placeholder="senha">
          <img class="show" src="img/visibility.png" id="showOn" alt="logo de olho para mostrar a senha">
          <img class="show" src="img/visibility_off.png" id="showOff" alt="logo de olho para ocultar a senha">
          <span id="pass-alert" class="pass-error"></span>
        </section>
        <h4 class="forget-password">esqueceu sua senha?</h4>
        <button class="btn-login" id="btn-login">Entrar</button>
        <span id="user-alert" class="user-error"></span>
        <h2>Ou continue com</h2>
        <img class="google" src="img/google.png" alt="logo-atual-google" width="80">
        <h3>Não possui uma conta?</h3>
        <a class="forget-password" href='/#register'>criar conta</a>
      </form>
    </nav>
  </section>
`;

user.innerHTML = loginTemplate;

// const showOn = document.getElementById('showOn');
// const showOff = document.getElementById('showOff');
// const entrar = document.getElementById('btn-login');

// entrar.addEventListener('click', (e) => {
//   e.preventDefault()
//   authLogin()
// })

// showOn.addEventListener('click', () => {
//   document.getElementById('password').setAttribute('type', 'text');
//   showOn.style.visibility = 'hidden';
//   showOff.style.visibility = 'visible';
// });

// showOff.addEventListener('click', () => {
//   document.getElementById('password').setAttribute('type', 'password');
//   showOn.style.visibility = 'visible';
//   showOff.style.visibility = 'hidden';
// });

return user;
}


// const emailLogin = document.querySelector('login1');
// const passLogin = document.querySelector('pass');
// const btnLogin = document.querySelector('btn-login');
// const googleLogin = document.querySelector('google');

// const emailAlert = user.querySelector('#email-alert');
// const passAlert = user.querySelector('#pass-alert');
// const userAlert = user.querySelector('#user-alert');

// const login = user.querySelector('#btn-login');
//   const strongPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+={}[\]\\|:;'<>,.?/~]).{6,}$/;

//   function validateEmail() {
//     const emailErrorInputValue = emailLogin.value;
//     if (!emailErrorInputValue) {
//       emailAlert.textContent = 'Insira um e-mail válido';
//     }
//   }

//   function validatePassword() {
//     const passInputValue = passLogin.value;
//     if (!passInputValue) {
//       passAlert.textContent = 'Senha inválida';
//     }
//   }

//   // limpar o erro ao digitar no input
//   emailInput.addEventListener('input', () => {
//     emailAlert.textContent = '';
//   });

//   passInput.addEventListener('input', () => {
//     passAlert.textContent = '';
//   });

// const showOn = document.getElementById('showOn');
// const showOff = document.getElementById('showOff');
// const entrar = document.getElementById('btn-login');

// entrar.addEventListener('click', (e) => {
//   e.preventDefault()
//   authLogin()
// })

// showOn.addEventListener('click', () => {
//   document.getElementById('password').setAttribute('type', 'text');
//   showOn.style.visibility = 'hidden';
//   showOff.style.visibility = 'visible';
// });

// showOff.addEventListener('click', () => {
//   document.getElementById('password').setAttribute('type', 'password');
//   showOn.style.visibility = 'visible';
//   showOff.style.visibility = 'hidden';
// });

// }