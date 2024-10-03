function macasCompradas(n) {
    if (n < 12) {
        let preco = parseFloat(n * 0.3);
        console.log('Valor total: R$:', preco);
    } else {
        preco = parseFloat(n * 0.25);
        console.log('Valor total: R$:', preco);
    }
}
let numeroMacas = 20;
macasCompradas(numeroMacas);