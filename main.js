// JavaScript (main.js)
function esPrimo(numero) {
    if (numero <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
}

document.getElementById("verificarBtn").addEventListener("click", function() {
    const numero = parseInt(document.getElementById("numero").value);
    const resultadoElement = document.getElementById("resultado");

    if (esPrimo(numero)) {
        resultadoElement.textContent = `${numero} es un número primo.`;
    } else {
        resultadoElement.textContent = `${numero} no es un número primo.`;
    }
});
