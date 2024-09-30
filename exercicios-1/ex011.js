function ex011(){
    let soma = 0;
    for (i = 1; i <= 5; i ++) {
        let n = parseInt(prompt('Digite algo: '));
        soma = soma + n;
    }
    console.log(soma)
}

ex011();