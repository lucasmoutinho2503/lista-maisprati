function imc(p, a){

    let calculo = (p / Math.pow(a, 2)).toFixed(2);
    console.log(calculo);

    if (calculo < 18.5) {
        console.log('Abaixo do peso normal.');
    } else if (calculo <= 24.9) {
        console.log('Peso normal.');
    } else if (calculo <= 29.9) {
        console.log('Excesso de peso.');
    } else if (calculo <= 34.9) {
        console.log('Obesidade classe I.');
    } else if (calculo <= 39.9) {
        console.log('Obesidade classe II.');
    } else {
        console.log('Obesidade classe III.');
    }
}
let peso = 1000.0;
let altura = 1.7;

imc(peso, altura);