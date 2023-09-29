import "./register.css";

export default () => {
    const register = document.createElement("section");
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
         <input id="user-name" type="text" placeholder="Sobrenome">
         <input id="email-reg" type="text" placeholder="E-mail">
        <section class="pass-register">
         <input id="password-reg" class="password-register" type="password" placeholder="Digite sua senha">
        </section>
         <section class="pass-register">
         <input id="password-confirm" class="password-register" type="password-confirm" placeholder="Confirme sua senha">
          <img class="show" src="img/visibility.png" id="showOn" alt="logo de olho para mostrar a senha">
          <img class="show" src="img/visibility_off.png" id="showOff" alt="logo de olho para ocultar a senha">
        </section>
        <button type="submit" id="register-btn">Inscreva-se</button>
        <span id="pass-different" class="pass-different-alert"></span>
        <h3 class="account">Já possui uma conta?</h3>
        <a class="your-account" href="/#login">acessar sua conta</a>
        </form>
    </section>
    `;
    
    register.innerHTML = registerTemplate;

    const appContainer = document.querySelector('#main');
  appContainer.appendChild(register);

    return register;
}