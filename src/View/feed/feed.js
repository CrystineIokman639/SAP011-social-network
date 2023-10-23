import {
  createPost,
  getPosts
} from '../../Firebase/firebaseStore.js';
import './feed.css';

export default () => {
  console.log("passou aqui")
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
      <section class="bodyFeed">
       <main class="containerPubli">
       <textarea id="user-text-area" class="user-text-area" placeholder="O que está lendo?"></textarea>
        <nav class="area-button-postar">
        <button id="add-post" class="button-post">Postar</button>
        </nav>
       </main>
        <form class='form-feed'>
        </form>
      </section>
   </nav>
  </section>`
  userFeed.innerHTML = template;

  const postButton = userFeed.querySelector("#add-post");

  //ouvinte
  postButton.addEventListener("click", async function (event) {
    event.preventDefault();

    // pegar o texto do campo de texto
    const postText = document.querySelector(".user-text-area").value;

    // Verifica se o post não está vazio
    if (postText.trim() !== "") {
      // Chame a função createPost para enviar ao Firestore
      const userUid = "ID_DO_USUARIO";
      const docRef = await createPost(postText, userUid);

      // Limpa o campo de publicar
      document.querySelector(".user-text-area").value = "";

      console.log("Post criado com sucesso. ID do documento:", docRef.id);
    } else {
      console.log("O campo de texto está vazio. O post não foi enviado.");
    }
  });

  //  função de recuperação de posts do Firestore

  //   Função para Renderizar os Posts
  async function renderPosts(posts) {
    console.log("funcionou o render que busca o post")

    const feedContainer = userFeed.querySelector(".form-feed");

    // Limpe o feed (caso deseje recarregar os posts)
     feedContainer.innerHTML = ""; 

    // Renderize cada post no feed
    posts.forEach((post) => {
      const postElement = document.createElement("section");
      postElement.className = "post";
      postElement.innerHTML = `
        <section class="posts">
          <span class="nickname">${post.user.nickname}</span>
          <section class="container-text-post">
            <p class="text">${post.texto}</p>
          </section>
        </section>
      `;
      feedContainer.appendChild(postElement);
    });
  }

  console.log("passou")
  getPosts(renderPosts);

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


  return userFeed;
}