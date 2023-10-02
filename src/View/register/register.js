import './register.css';

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
         <section class="pass-register">
         <input id="password-confirm" class="password-register" type="password-confirm" placeholder="Confirme sua senha">
           <img class="show" src="img/visibility.png" id="show1" alt="logo de olho para mostrar a senha">
           <img class="show" src="img/visibility_off.png" id="Off1" alt="logo de olho para ocultar a senha">
        </section>
        <button type="submit" id="register-btn">Inscreva-se</button>
        <span id="pass-different" class="pass-different-alert"></span>
        <h3 class="account">Já possui uma conta?</h3>
        <a class="your-account" href="/#login">acessar sua conta</a>
        </form>
    </nav>
    </section>
    `;

  register.innerHTML = registerTemplate;
  const appContainer = document.querySelector('#main');
  appContainer.appendChild(register);

  const show = register.querySelector('#show');
  const off = register.querySelector('#Off');
  const teste = register.querySelector('#register-btn');

  teste.addEventListener('click', (e) => {
    e.preventDefault()
    authLogin()
  })

  show.addEventListener('click', () => {
    register.querySelector('#password-reg').setAttribute('type', 'text');
    show.style.visibility = 'hidden';
    off.style.visibility = 'visible';
  })

  off.addEventListener('click', () => {
    register.querySelector('#password-reg').setAttribute('type', 'password');
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
    register.querySelector('#password-confirm').setAttribute('type', 'text');
    show1.style.visibility = 'hidden';
    off1.style.visibility = 'visible';
  })

  off1.addEventListener('click', () => {
    register.querySelector('#password-confirm').setAttribute('type', 'password');
    show1.style.visibility = 'visible';
    off1.style.visibility = 'hidden';
  });
  
  return register;

}