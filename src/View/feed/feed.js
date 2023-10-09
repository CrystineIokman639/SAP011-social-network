// import {
//   fetchPosts,
//   createPost,
//   likeCounter,
//   unlikeCounter,
//   deletePost,
//   editPost,
// } from '../../firebase/firebaseStore';
import './feed.css';
// import { createPost } from './firestore.js';


export default () => {
    const userFeed = document.createElement('section');
    const template = ` 
  <section class="geral">
   <nav class="containerFeed">
     <header class="topHeader">
       <img class="img-menu" src="img/menu.png" alt="logo menu três riscos iguais um em cima do outro" height="45" width="45" onclick="clickMenu()">
       <img class="logo-header" src="img/logo.svg" alt="logo booknook, um livro aberto com as folhas abrindo" height="60" width="60">
       <img class="nada" src="img/logon.svg" alt="icone vazio gambiarra braba">
     </header>
    <ul id="itens" class="menu">
     <li class="cat">
       <img class="feed" src="img/feed.png" alt="icone para ir para o feed">
       <a class="titulo">Feed</a>
     </li>
     <li class="cat">
       <img class="logout" src="img/logout.png" alt="icone para sair da página">
       <a class="titulo" href="/#login">Sair</a>
     </li>
    </ul>
      <section class="template">
        <form class='form-feed'>
          <textarea class="user-text-area" placeholder="O que está lendo?"></textarea>
        </form>
      </section>
   </nav>
  </section>`

    userFeed.innerHTML = template;
    
    const imgMenu = userFeed.querySelector('.img-menu');
    imgMenu.onclick = clickMenu;

    function clickMenu() {
      const itens = document.getElementById('itens');
      if (itens.style.display === "block") {
          itens.style.display = "none";
      } else {
          itens.style.display = "block";
      }
  }

  // const content = `
  //    <section id="create-post" class="conteudo">
  //      <p class="name">${post.username}</p>
  //    </section>
  //    <form id="post-form">
  //           <textarea id="post-text" 
  //           placeholder="Digite seu post aqui">
  //           </textarea>
  //           <button type="submit">Publicar</button>
  //    </form>
    
  // `;

return userFeed;
}