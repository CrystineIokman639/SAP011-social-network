import { authLogin, authByGoogle } from "../../src/Firebase/firebaseauth";

describe('testes das funções de login', () => {
    it('deve exibir uma mensagem de erro quando o e-mail estiver vazio', () => {
        document.body.innerHTML = `
<input class="login1" id="email" type="email" placeholder="e-mail" required>
`
const emailImput = user.querySelector('#email');
        console.log(emailImput.value)
    })
})