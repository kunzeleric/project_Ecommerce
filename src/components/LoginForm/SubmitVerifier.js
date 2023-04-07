
const SubmitVerifier = (event) => {
    let input = Array.from(document.querySelectorAll('input'));
    let verificador = Array.from(document.querySelectorAll('.verificador'));
    let verificadorGeral = document.querySelector('.verificadorGeral');
    let form = document.querySelector('form');
    let check = true;

    event.preventDefault();

    input.some((element, index) => {
        if (element.value.length === 0) {
            verificador[index].innerHTML = "*Campo Obrigatório*";
            verificadorGeral.innerHTML = "Campos obrigatórios não preenchidos!";

            verificador[index].style.display = 'block';
            verificadorGeral.style.display = 'block';
            verificadorGeral.style.color = 'red';
            check = false;
        }
    })

    if (check) {
        verificadorGeral.style.display = 'block';
        verificadorGeral.style.color = "green";
        verificadorGeral.innerHTML = "Sucesso!";
        form.reset();
    }
    else {
        verificadorGeral.innerHTML = "Campos obrigatórios não preenchidos!";
    }
}

export default SubmitVerifier
