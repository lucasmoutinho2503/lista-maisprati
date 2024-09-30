function triangulo(a, b, c) {
    if (a < b + c && b < a + c && c < a + b) {
        console.log('É um Triângulo!');
        if (a == b && b == c) {
            console.log('Triângulo equilátero!');
        } else if (a != b && b != c) {
            console.log('Triângulo escaleno!');
        } else if ( a == b || b == c || c == a) {
            console.log('Triângulo isósceles!');
        }
    } else {
        console.log('Não é um Triângulo!');
    }
}

let ladoA = 3;
let ladoB = 4;
let ladoC = 4;

triangulo(ladoA, ladoB, ladoC);