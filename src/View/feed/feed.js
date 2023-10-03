import './feed.css';

export default () => {
    const userFeed = document.createElement('section');
    const template = ` 
   <nav class="containerFeed">
     <header class="topHeader">
       <img class="logo-header" src="img/logo.svg" alt="logo booknook, um livro aberto com as folhas abrindo" height="60" width="60">
     </header>
      <section class="template">
        <form class='form-feed'>
          <textarea class="user-text-area" placeholder="O que está lendo?"></textarea>
        </form>
      </section>
    <ul class="menu">
      <li>
      <a class="cat">Feed</a>
      </li>
      <li>
      <a class="cat">Sair</a>
      </li>
      <li>
      <a class="cat">Meu perfil</a>
      </li>
    </ul>
   </nav>`

    userFeed.innerHTML = template;
    return userFeed;
}










/* <ul class="menu">
      <li>
       Feed
      </li>

      <li>
       Sair
      </li>

      <li>
       Meu Perfil
      </li>
    </ul> */
