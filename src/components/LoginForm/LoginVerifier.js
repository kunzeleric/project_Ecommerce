const LoginVerifier = (element) => {
    let verificadorGeral = document.querySelector('.verificadorGeral');
    let verificador = document.querySelectorAll('.verificador');

    if (element.target.value.trim().length === 0) {
        element.target.style.borderColor = "red";

        element.target.parentElement.nextElementSibling.style.display = "block";

        verificadorGeral.style.color = "red";
        verificadorGeral.innerHTML = "Campos obrigatórios não preenchidos!"
    } else {
        element.target.style.borderColor = "#7A7A7A";

        verificadorGeral.innerHTML = "";
        verificadorGeral.style.color = "red";
    }
}

export default LoginVerifier;