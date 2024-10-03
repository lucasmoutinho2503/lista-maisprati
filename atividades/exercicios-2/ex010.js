const vendas = [
    {nome: 'Sabão', quantidade: 10.0, valor: 10.0},
    {nome: 'Desodorante', quantidade: 100.0, valor: 5.0},
    {nome: 'Shampoo', quantidade: 50.0, valor: 7.0}
];
let total = 0;

vendas.forEach(function(venda) {
    total +=  (venda.valor * venda.quantidade);
});

console.log(total);
