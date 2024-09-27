const carro = {
    marca: "Chevrolet",
    modelo: "Cruze",
    ano: 2023,
    cor: "Preto"
};

for (let i in carro) {
    console.log(i + ": " + carro[i]);
}