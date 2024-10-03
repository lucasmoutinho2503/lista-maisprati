function notaConceito(n) {
    if (n >= 7) {
        console.log('Situação: Aprovado');
    } else if (n >= 5) {
        console.log('Situação: Recuperação')
    } else {
        console.log('Situação: Reprovado');
    }
}

let nota = 5;
notaConceito(nota);