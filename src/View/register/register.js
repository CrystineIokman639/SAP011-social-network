import './register.css';
import { registerUser, authLogin } from '../../Firebase/firebaseauth';
import logo2 from "../../img/logo2.png"
import visibility from "../../img/visibility.png"
import visibility_off from "../../img/visibility_off.png"

export default () => {
  const register = document.createElement('section');
  register.classList.add('container-register');
  const registerTemplate = `
    <section class="container-register">
      <header>
         <img class="booknook-reg" src="${logo2}" alt="logo da rede social" width="250">
      </header>
     <nav class="register-container">
      <form class="form-register">
        <h1 class="register">cadastro</h1>
         <input id="nickname" type="text" placeholder="Apelido">
           <span id="nickname-alert" class="nickname-alert"></span>
         <input id="email-reg" type="text" placeholder="E-mail">
           <span id="email-alert" class="email-alert"></span>
        <section class="pass-register">
         <input id="password-reg" class="password-register" type="password" placeholder="Digite sua senha">
           <img class="show" src="${visibility}" id="show" alt="logo de olho para mostrar a senha">
           <img class="show" src="${visibility_off}" id="Off" alt="logo de olho para ocultar a senha">
        </section>
           <span id="pass-alert" class="password-alert"></span>
        <button type="submit" id="register-btn">Inscreva-se</button>
        <h3 class="account">Já possui uma conta?</h3>
        <a class="your-account" href="/#login">acessar sua conta</a>
        </form>
    </nav>
    </section>
    `;
  register.innerHTML = registerTemplate;
  const appContainer = document.querySelector('#main');
  appContainer.appendChild(register);

  const form = appContainer.querySelector('.form-register')
  const nickname = appContainer.querySelector('#nickname')
  const regEmail = appContainer.querySelector('#email-reg')
  const password = appContainer.querySelector('#password-reg')
  const buttonRegister = appContainer.querySelector('#register-btn')

  const spanNickname = appContainer.querySelector('#nickname-alert')
  const spanEmail = appContainer.querySelector('#email-alert')
  const spanPass = appContainer.querySelector('#pass-alert')

  form.addEventListener('submit', (e) => {
    e.preventDefault() // previne o comportamento padrão do html

    getData() // quando o form for enviado ele vai executar esta function
  });

  async function getData() { // a função para fazer a validação 
    const nicknameValue = nickname.value.trim() // o .trim é pra remover os espaçamentos a mais que o usuário colocar nos campos de preenchimento
    const emailValue = regEmail.value.trim()// .value é pra pegar as inform
    const passValue = password.value.trim()
    console.log(nicknameValue)
    if (nicknameValue === '') {
      spanNickname.textContent = 'insira um apelido';
    }
    if (emailValue === '') {
      spanEmail.textContent = 'insira um email';
    }
    if (passValue === '') {
      spanPass.textContent = 'insira uma senha';
    }
    if(emailValue !== '' && passValue !== '' && nicknameValue !== ''){
    
      await registerUser(nicknameValue, emailValue, passValue)
    };
  }
  // mostrar e esconder senhas
  const show = register.querySelector('#show');
  const off = register.querySelector('#Off');

  show.addEventListener('click', () => {
    console.log("clique no show")
    register.querySelector('#password-reg').setAttribute('type', 'password');
    show.style.visibility = 'hidden';
    off.style.visibility = 'visible';
  })

  off.addEventListener('click', () => {
    register.querySelector('#password-reg').setAttribute('type', 'text');
    show.style.visibility = 'visible';
    off.style.visibility = 'hidden';
  });

  return register;
}