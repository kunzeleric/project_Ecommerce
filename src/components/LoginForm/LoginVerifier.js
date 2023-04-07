
const LoginVerifier = (element) => {
    let verificadorGeral = document.querySelector('.verificadorGeral');
    let verificador = Array.from(document.querySelectorAll('.verificador'));

    if (element.target.value.trim().length === 0) {
        element.target.style.borderColor = "red";

        verificadorGeral.style.color = "red";
        verificadorGeral.innerHTML = "Campos obrigatórios não preenchidos!"
        verificadorGeral.style.display = "block";
        element.target.parentElement.lastElementChild.style.display = 'block';
        element.target.parentElement.lastElementChild.innerHTML = '*Campo obrigatório!';

    } else {
        element.target.style.borderColor = "#7A7A7A";
        verificadorGeral.style.display = "none";
        console.log(element.target.parentElement.lastElementChild)
        element.target.parentElement.lastElementChild.style.display = 'none';
    }
}

export default LoginVerifier;