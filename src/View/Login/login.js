import { authLogin } from '../../Firebase/firebaseauth';
import './login.css';

export default () => {
const user = document.createElement("section");
const loginTemplate = `
  <section class="container">
    <header class="topp">
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
        <a class="forget-password" href="/#register">criar conta</a>
      </form>
    </nav>
  </section>
`;

user.innerHTML = loginTemplate;

const showOn = loginTemplate.querySelector('#showOn');
const showOff = loginTemplate.querySelector('#showOff');
const entrar = loginTemplate.querySelector('#btn-login');

entrar.addEventListener('click', (e) => {
  e.preventDefault()
  authLogin()
});

showOn.addEventListener('click', () => {
  loginTemplate.querySelector('#password').setAttribute('type', 'text');
  showOn.style.visibility = 'hidden';
  showOff.style.visibility = 'visible';
});
console.log(showOff);
showOff.addEventListener('click', () => {
  loginTemplate.querySelector('#password').setAttribute('type', 'password');
  showOn.style.visibility = 'visible';
  showOff.style.visibility = 'hidden';
  console.log("visible");
});

return user;
}