const carrinho = {
    itens: [
        {
            nome: 'Batata',
            quantidade: 10,
            precoUnitario: 10
        },
        {
            nome: 'Cenoura',
            quantidade: 10,
            precoUnitario: 10
        },
        {
            nome: 'Couve',
            quantidade: 10,
            precoUnitario: 10
        }
    ]
};

let valorTotal = 0;

carrinho.itens.forEach(function(compras) {
    let quantidade = parseInt(compras.quantidade, 10) || 0;

    valorTotal +=  (compras.precoUnitario * quantidade);
});

console.log(valorTotal);