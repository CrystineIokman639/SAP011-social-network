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
      <section class="template">
        <form class='form-feed'>
          <textarea id="user-text-area" class="user-text-area" placeholder="O que está lendo?"></textarea>
          <button id="add-post" class="button-post">Postar</button>
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
  async function renderPosts() {
    console.log("funcionou o render que busca o post")
    // Obtenha os posts do Firestore
    const posts = await getPosts(); // Implementa a função getPosts que busca os posts no Firestore

    // Selecione o contêiner do feed no seu HTML
    const feedContainer = userFeed.querySelector(".form-feed");

    // Limpe o feed (caso deseje recarregar os posts)
     feedContainer.innerHTML = ""; 

    // Renderize cada post no feed
    posts.forEach((post) => {
      const postElement = document.createElement("section");
      postElement.innerHTML = `<p>${post.texto}</p>`; // Adapte o HTML conforme necessário
      feedContainer.appendChild(postElement);
    });
  }



  // Chama a Função renderPosts Quando a Página Carrega
  console.log("passou")
  renderPosts();

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