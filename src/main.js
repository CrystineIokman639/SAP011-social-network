import login from "./View/Login/login"
import feed from "./View/feed/feed.js"
import register from "./View/Register/register"
// import register from "./View/register/register"

const main = document.querySelector("#main");
function verificaHash(){
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
const init = () => {
    window.addEventListener("hashchange", () =>{
      verificaHash()
    }
)}

window.addEventListener ("load", () => {
    verificaHash()
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