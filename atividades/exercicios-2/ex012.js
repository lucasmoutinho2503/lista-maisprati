const estoque = [
    {produto: 'Creme', quantidade: 50, minimo: 70},
    {produto: 'Nutella', quantidade: 90, minimo: 100},
    {produto: 'Oreo', quantidade: 100, minimo: 50},
];

estoque.forEach(atualizar => {
    if (atualizar.quantidade < atualizar.minimo) {
        atualizar.quantidade = atualizar.quantidade * 2;
    }

    console.log(atualizar);
});