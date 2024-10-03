function verificarPrimo(n){
    if (n <= 1) {
        console.log("Não é primo");
        return;
    }

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            console.log("Não é primo");
            return;
        } 
    }
    console.log("É primo");
}

let n = 20;
verificarPrimo(n);