const LoginVerifier = (element) => {
    let verificadorGeral = document.querySelector('.verificadorGeral');

    if (element.target.value.trim().length === 0) {
        element.target.nextElementSibling.innerHTML = "*Campo Obrigatório*"
        element.target.style.borderColor = "red";
        verificadorGeral.style.color = "red";
        verificadorGeral.innerHTML = "Campos obrigatórios não preenchidos!"
    } else {
        element.target.nextElementSibling.innerHTML = "";
        element.target.style.borderColor = "#7A7A7A";

        verificadorGeral.innerHTML = "";
        verificadorGeral.style.color = "red";
    }
}

export default LoginVerifier;