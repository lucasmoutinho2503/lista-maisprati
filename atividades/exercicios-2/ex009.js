const clientes = [
    {nome: "Lucas", idade: 21, cidade: 'Porto Alegre'},
    {nome: 'Gabriel', idade: 18, cidade: 'Eldorado do Sul'},
    {nome: 'João', idade: 31, cidade: 'Viamão'}
];
let cont = 0;
clientes.forEach(cliente => {
    
    if (cliente.idade > 30) {
        cont++;   
    }
});

console.log(cont);