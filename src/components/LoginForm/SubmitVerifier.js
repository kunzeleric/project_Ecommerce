const SubmitVerifier = (event) => {
    let input = Array.from(document.querySelectorAll('input'));
    let verificador = Array.from(document.querySelectorAll('.verificador'));
    let verificadorGeral = document.querySelector('.verificadorGeral');
    let check = true;

    event.preventDefault();

    input.map((element, index) => {
        if (element.value.length === 0) {
            verificador[index].innerHTML = "*Campo Obrigatório*";
            verificadorGeral.innerHTML = "Campos obrigatórios não preenchidos!";
            verificador[index].style.display = 'block';
            verificadorGeral.style.display = 'block';
            check = false;
        }
    })

    if (check) {
        verificadorGeral.style.color = "green";
        verificadorGeral.innerHTML = "Sucesso!";
    }
    else {
        verificadorGeral.innerHTML = "Campos obrigatórios não preenchidos!";
    }
}

export default SubmitVerifier
