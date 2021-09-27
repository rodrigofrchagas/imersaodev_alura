let numeroCorreto = Math.floor(Math.random() * 11);

function chutar() {
    const chute = parseInt(document.getElementById("valor").value);

    if (chute >= 0 && chute <= 10) {
        if (numeroCorreto === chute) {
            document.getElementById('resultado')
                .textContent = `Parabéns! O número ${chute} é o número correto!`;
        }
        else {
            document.getElementById('resultado')
                .textContent = `Ops! :( O número ${chute} não é o número correto!`;
        }
    } else {
        document.getElementById('resultado')
            .textContent = `O número ${chute} não é válido. Por favor, digite um número entre 0 e 10.`;
    }
}