import './register.css';
import { registerUser } from '../../Firebase/firebaseauth';

export default () => {
  const register = document.createElement('section');
  register.classList.add('container-register');
  const registerTemplate = `
    <section class="container-register">
      <header>
         <img class="booknook-reg" src="img/logo2.png" alt="logo da rede social" width="250">
      </header>
     <nav class="register-container">
      <form id="form-register">
        <h1 class="register">cadastro</h1>
         <input id="name-lastname" type="text" placeholder="Nome">
         <input id="user-name" type="text" placeholder="Nome de usuário">
         <input id="email-reg" type="text" placeholder="E-mail">
        <section class="pass-register">
         <input id="password-reg" class="password-register" type="password" placeholder="Digite sua senha">
           <img class="show" src="img/visibility.png" id="show" alt="logo de olho para mostrar a senha">
           <img class="show" src="img/visibility_off.png" id="Off" alt="logo de olho para ocultar a senha">
        </section>
        <span id="pass-alert" class="password-alert"></span>
         <section class="pass-register">
         <input id="password-confirm" class="password-register" type="password-confirm" placeholder="Confirme sua senha">
           <img class="show" src="img/visibility.png" id="show1" alt="logo de olho para mostrar a senha">
           <img class="show" src="img/visibility_off.png" id="Off1" alt="logo de olho para ocultar a senha">
        </section>
        <span id="pass-different" class="password-alert"></span>
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

    // Selecionando elementos do formulário
  const form = document.querySelector('.form-register');
  const inputs = form.querySelectorAll('input');
  const btnRegister = form.querySelector('#register-btn');
  // Selecionando elementos de alerta de senha
  const passwordAlert = document.getElementById('#pass-alert');
  const passwordDifferent = document.getElementById('pass-different');
  const passwordInput = document.getElementById('password-reg');
  const confirmPasswordInput = document.getElementById('password-confirm');
  const strongPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+={}[\]\\|:;'<>,.?/~]).{6,}$/;

  const verifyForm = () => {
    const allInputs = Array.from(inputs).every((input) => input.value !== '');
    btnRegister.disabled = !allInputs;
  };
  inputs.forEach((input) => {
    input.addEventListener('input', verifyForm);
  });

  // Função para validar a senha
  const validatePassword = () => {
    const password = passwordInput.value; // Obter o valor do campo de senha
    return strongPassword.test(password);
  };
  // Escutando o submit para enviar o formulário
  form.addEventListener('submit', async (e) => {
    e.preventDefault();// Evitar envio do formulário por padrão
    // Obter os valores dos campos de entrada
    const name = document.getElementById('name-lastname').value;
    const username = document.getElementById('user-name').value;
    const email = document.getElementById('email-reg').value;
    const password = document.getElementById('password-reg').value;
    const confirmPassword = document.getElementById('password-confirm').value;
    // Verificar se a senha atende aos requisitos mínimos
    if (!validatePassword()) {
      passwordAlert.textContent = '1 letra maíuscula e minuscula, 1 caracter especial e 1 número';
    }
    // Limpar os alertas de senha quando o campo é modificado
    passwordInput.addEventListener('input', () => {
      passwordAlert.textContent = '';
    });
    confirmPasswordInput.addEventListener('input', () => {
      passwordDifferent.textContent = '';
    });
    // Verificando se as senhas são iguais
    let officialPassword;
    if (password !== confirmPassword) {
      passwordDifferent.textContent = 'As senhas informadas são diferentes';
    } else if (strongPassword.test(password)) {
      officialPassword = password;
    } else {
      passwordAlert.textContent = '1 letra maíuscula e minuscula, 1 caracter especial e 1 número';
    }
    // Registrar o usuário usando as informações fornecidas
    await registerUser(name, username, email, officialPassword);

    if (auth.currentUser) {
      window.location.href = '#feed';
    }
  });

  // mostrar e esconder senhas
  const show = register.querySelector('#show');
  const off = register.querySelector('#Off');
  const teste = register.querySelector('#register-btn');

  teste.addEventListener('click', (e) => {
    e.preventDefault()
    authLogin()
  })

  show.addEventListener('click', () => {
    register.querySelector('#password-reg').setAttribute('type', 'password');
    show.style.visibility = 'hidden';
    off.style.visibility = 'visible';
  })

  off.addEventListener('click', () => {
    register.querySelector('#password-reg').setAttribute('type', 'text');
    show.style.visibility = 'visible';
    off.style.visibility = 'hidden';
  });

  const show1 = register.querySelector('#show1');
  const off1 = register.querySelector('#Off1');
  const teste1 = register.querySelector('#register-btn');

  teste1.addEventListener('click', (e) => {
    e.preventDefault()
    authLogin()
  })

  show1.addEventListener('click', () => {
    register.querySelector('#password-confirm').setAttribute('type', 'password');
    show1.style.visibility = 'hidden';
    off1.style.visibility = 'visible';
  })

  off1.addEventListener('click', () => {
    register.querySelector('#password-confirm').setAttribute('type', 'text');
    show1.style.visibility = 'visible';
    off1.style.visibility = 'hidden';
  });
  
  return register;

}