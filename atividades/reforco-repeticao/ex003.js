function trianguloNumerico(linhas) {
    for (let i = 0; i <= linhas; i++) {
        let linha = ' ';
        for (let j = 0; j <= i; j++){
            linha += j + " ";
        }
        console.log(linha)
    }
    
}
let linhas = 20;
trianguloNumerico(linhas);