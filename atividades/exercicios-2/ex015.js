const transacoes = [
    {  
        tipo: 'entrada',
        valor: 100.00
    },
    {  
        tipo: 'entrada',
        valor: 150.00
    },
    {  
        tipo: 'saida',
        valor: 20.00
    },
    {  
        tipo: 'saida',
        valor: 40.00
    },
    {  
        tipo: 'entrada',
        valor: 8.00
    },
];



let saldo = 0;

transacoes.forEach(function(transacao) {

    if (transacao.tipo === 'entrada') {
        saldo += transacao.valor;
    } else if (transacao.tipo === 'saida') {
        saldo -= transacao.valor;
    }
    
    
});

console.log(saldo);