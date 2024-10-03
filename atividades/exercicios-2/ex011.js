const pedidos = [
    {cliente: 'Sara', produto: 'telefone', quantidade: 1}, 
    {cliente: 'Ana', produto: 'Sabonete', quantidade: 5},
    {cliente: 'Ana', produto: 'Ovomaltine' , quantidade: 2},
    {cliente: 'Fábio', produto: 'Ovo' , quantidade: 2},
    {cliente: 'Fábio', produto: 'Guaraná' , quantidade: 8}
];

let totalClientes = {};

pedidos.forEach(function(pedido) {
    let quantidade = parseInt(pedido.quantidade, 10) || 0;

    if (!totalClientes[pedido.cliente]) {
        totalClientes[pedido.cliente] = {};
    }

    if (!totalClientes[pedido.cliente][pedido.produto]) {
        totalClientes[pedido.cliente][pedido.produto] = 0;
    }

    totalClientes[pedido.cliente][pedido.produto] += quantidade;
});

console.log(totalClientes);