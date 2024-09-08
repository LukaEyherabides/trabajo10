
function encontrarMayor(num1, num2, num3, num4) {
    let mayor = num1;

    if (num2 > mayor) {
        mayor = num2;
    }
    if (num3 > mayor) {
        mayor = num3;
    }
    if (num4 > mayor) {
        mayor = num4;
    }
    return mayor;
}

function encontrarMenor(num1, num2, num3) {
    let menor = num1;

    if (num2 < menor) {
        menor = num2;
    }
    if (num3 < menor) {
        menor = num3;
    }
    return menor;
}

function parImpar(numero) {
    if (numero % 2 === 0) {
        return "El número es par";
    } else {
        return "El número es impar";
    }
}

console.log("El mayor de 4 numeros es:", encontrarMayor(86, 87, 900, 7));

console.log("El menor de 3 numeros es:", encontrarMenor(77, 4, 15));

console.log(parImpar(87)); 
