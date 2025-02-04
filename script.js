function calcularFactorial() {
    const input = document.getElementById("numero");
    const resultado = document.getElementById("resultado");

    const numero = Number(input.value); // Corrección aquí

    // Validación mejorada
    if (isNaN(numero) || numero < 0 || !Number.isInteger(numero)) {
        resultado.textContent = "Por favor, ingresa un número entero positivo válido.";
        return;
    }

    let factorial = 1;
    for (let i = 1; i <= numero; i++) {
        factorial *= i;
    }

    resultado.textContent = `El factorial de ${numero} es: ${factorial}`;
}
