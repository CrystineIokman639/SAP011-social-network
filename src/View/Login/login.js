import { authLogin, authByGoogle } from "../../Firebase/firebaseauth";
import './login.css';
import logo2 from "../../img/logo2.png"
import visibility from "../../img/visibility.png"
import visibility_off from "../../img/visibility_off.png"
import google from "../../img/google.png"

export default () => {
  const user = document.createElement('section');
  const loginTemplate = `
   <section class="container">
    <header class="topp">
      <img class="booknook" src="${logo2}" alt="logo da rede social" width="250">
    </header>

    <nav class="form-container">
      <form id="email-login">
        <h1>entrar</h1>
        <section class="email2">
         <input class="login1" id="email" type="email" placeholder="e-mail" required>
         <span id="email-alert" class="email-error"></span>
        </section>
        <section class="passwordDad">
         <input id="password" class="pass" type="password" placeholder="senha" required>
          <img class="show" src="${visibility}" id="showOn" alt="logo de olho para mostrar a senha">
          <img class="show" src="${visibility_off}" id="showOff" alt="logo de olho para ocultar a senha">
          <span id="pass-alert" class="pass-error"></span>
        </section>
        <button class="btn-login" id="btn-login">Entrar</button>
          <span id="user-alert" class="user-error"></span>
        <h2>Ou continue com</h2>
          <img class="google" id="google-btn" src="${google}" alt="logo-atual-google" width="80">
        <h3>Não possui uma conta?</h3>
          <a class="forget-password" href='/#register'>criar conta</a>
      </form>
    </nav>
   </section>
        `;

  user.innerHTML = loginTemplate;

  const showOn = user.querySelector('#showOn');
  const showOff = user.querySelector('#showOff');
  const entrar = user.querySelector('#btn-login');
  const emailImput = user.querySelector('#email');
  const senhaImput = user.querySelector('#password');
  const emailAlert = user.querySelector('#email-alert')
  const senhaAlert = user.querySelector('#pass-alert')
  const googleButton = user.querySelector('#google-btn')
  let email = "";
  let senha = "";
  const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/


  let errors = {
    email: false,
    senha: false
  }

  function validaCampo() {
    if (!email || !regexEmail.test(email)) {
      errors.email = true
      emailAlert.textContent = ' insira um e-mail válido';
    } else {
      errors.email = false
      emailAlert.textContent = '';
    }
    if (!senha) {
      errors.senha = true
      senhaAlert.textContent = ' insira uma senha';
    } else {
      errors.senha = false
      senhaAlert.textContent = '';
    }

    return user;
  }

  googleButton.addEventListener('click', () => {
    authByGoogle()
  })

  entrar.addEventListener('click', (e) => {
    e.preventDefault()
    validaCampo()
    if (Object.values(errors).every(e => e === false)) {

      authLogin(email, senha)
    }

  })

  emailImput.addEventListener("change", (e) => {
    email = e.target.value

  })

  senhaImput.addEventListener("change", (e) => {
    senha = e.target.value
  })

  showOn.addEventListener('click', () => {
    user.querySelector('#password').setAttribute('type', 'password');
    showOn.style.visibility = 'hidden';
    showOff.style.visibility = 'visible';
  });

  showOff.addEventListener('click', () => {
    user.querySelector('#password').setAttribute('type', 'text');
    showOn.style.visibility = 'visible';
    showOff.style.visibility = 'hidden';
  });

  return user;
}
