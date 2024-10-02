const produtos = [
    {nome: 'Sabão', preco: 10.0, desconto: 10.0},
    {nome: 'Desodorante', preco: 100.0, desconto: 10.0},
    {nome: 'Shampoo', preco: 50.0, desconto: 10.0}
];

produtos.forEach( produto => {
    let precoDesconto = (produto.preco * (100-produto.desconto)) / 100;
    produto.precoPromocional = precoDesconto;
    console.log(produto);
})