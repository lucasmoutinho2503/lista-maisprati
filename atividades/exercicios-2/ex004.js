const pessoas = [
    {nome: "Lucas", idade: 21, cidade: 'Porto Alegre'},
    {nome: 'Gabriel', idade: 18, cidade: 'Eldorado do Sul'},
    {nome: 'João', idade: 30, cidade: 'Viamão'}
];

for (let pessoa of pessoas) {
    console.log(`Nome : ${pessoa.nome}`);
    console.log(`idade : ${pessoa.idade}`);
    console.log(`Cidade : ${pessoa.cidade}`);
    console.log('--------------------')
}