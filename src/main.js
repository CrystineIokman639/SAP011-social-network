import login from "./View/Login/login"
import feed from "./view/feed/feed.js"
import register from "./View/Register/register"
// import register from "./View/register/register"

const main = document.querySelector("#main");

const init = () => {
    window.addEventListener("hashchange", () =>{
        main.innerHTML = ""
    switch(window.location.hash) {
        case "#login":
            main.appendChild(login());
            break;
        case "#register":
            main.appendChild(register());
            break;
        case "#feed":
            main.appendChild(feed());
            break;
            default:
            main.appendChild(login());
    }
    }
)}

window.addEventListener ("load", () => {
    window.location.hash="";
    main.appendChild(login());
    init(); 
});










// evento de escuta
//     window.addEventListener("hashchange", function () {});
//   function loadContent() {
//     const contentDiv = document.getElementById("app"),
//       fragmentId = location.hash.substr(1);
//     contentDiv.innerHTML = fragmentId;
//   }
//   if (!location.hash) {
//     location.hash = "#home";
//   }
//   loadContent();
//   window.addEventListener("hashchange", loadContent);
//   user.innerHTML = loginTemplate;