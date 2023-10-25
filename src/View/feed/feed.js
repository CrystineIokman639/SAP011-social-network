import {
  createPost,
  deletePost,
  getPosts
} from '../../Firebase/firebaseStore.js';
import './feed.css';

export default () => {
  console.log("passou aqui")
  const userFeed = document.createElement('section');
  const template = ` 
  <section class="geral">
  <div class="modal">
      <div class="modal-content">
        <span class="close-button">×</span>
        <h3>editar texto</h3>
        <input id="id-text-modal" class="text-modal"></input>
        <section>
         <button type="button" id="id-save-text-modal" class="button-save-modal">salvar</button>
        <section>
      </div>
    </div>
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
  const modal = userFeed.querySelector(".modal");

  function toggleModal() {
    modal.classList.toggle("show-modal");
  }

  function windowOnClick(event) {
    if (event.target === modal) {
      toggleModal();
    }
  }


  window.addEventListener("click", windowOnClick);
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

    console.log(posts)
    // Renderize cada post no feed
    posts.forEach((post) => {
      const postElement = document.createElement("section");
      postElement.className = "post";
      postElement.innerHTML = `
        <section class="posts">
          <span class="nickname">${post.nickname}</span>
          <section class ="buttons-edit">
            <button class="edit-button" id="${post.id}-edit-button" >edit</button>
            <button class="delete-button" id="${post.id}-delete-button" >Delete</button>
          </section>
          <section class="container-text-post">
            <p class="text">${post.texto}</p>
          </section>
        </section>
      `;
      feedContainer.appendChild(postElement);
    });

    posts.forEach((post) => {
      const buttonEdit = document.getElementById(`${post.id}-edit-button`)
      buttonEdit.addEventListener("click", (e) => {
        e.preventDefault()
        EditarPostButton(post.id, post.texto)
      })
      const buttonDelete = document.getElementById(`${post.id}-delete-button`)
      buttonDelete.addEventListener("click", (e) => {
        e.preventDefault()
        DeletePostButton(post.id)
      })
    })
  }

  function EditarPostButton(id, text) {
    const modal = document.querySelector(".modal");
    document.querySelector("#id-text-modal").value = text
    modal.classList.toggle("show-modal")
    const closeButton = document.querySelector(".close-button");
    closeButton.addEventListener("click", toggleModal)
    console.log(id, text)
  }

  function DeletePostButton(id) {
    deletePost(id)
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