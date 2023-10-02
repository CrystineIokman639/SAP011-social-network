import { authLogin } from "../../Firebase/firebaseauth";
import feed from "../feed/feed";
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
         <input class="login1" id="email" type="email" placeholder="e-mail" required>
         <span id="email-alert" class="email-error"></span>
        </section>
        <section class="passwordDad">
         <input id="password" class="pass" type="password" placeholder="senha" required>
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


const showOn = user.querySelector('#showOn');
const showOff = user.querySelector('#showOff');
const entrar = user.querySelector('#btn-login');
const emailImput= user.querySelector('#email');
const senhaImput = user.querySelector ('#password');
const emailAlert = user.querySelector ('#email-alert')
let email= "";
let senha= "";
const strongPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+={}[\]\\|:;'<>,.?/~]).{6,}$/;

function validaCampo(){
    if (!email)
    {
    emailAlert.textContent=' insira um e-mail válido';


  }

}




entrar.addEventListener('click', (e) => {
  e.preventDefault()
  
  authLogin(email,senha)

})


emailImput.addEventListener("change", (e)=>{
  email=e.target.value

})

senhaImput.addEventListener("change", (e)=>{
  senha=e.target.value
})

showOn.addEventListener('click', () => {
 user.querySelector('#password').setAttribute('type', 'text');
  showOn.style.visibility = 'hidden';
  showOff.style.visibility = 'visible';
});

showOff.addEventListener('click', () => {
  user.querySelector('#password').setAttribute('type', 'password');
  showOn.style.visibility = 'visible';
  showOff.style.visibility = 'hidden';
});

return user;
}





