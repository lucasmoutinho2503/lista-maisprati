function ex013() {
    let soma = 0;
    for (;;){
        let usuario = parseInt(prompt('Digite um valor (0 encerra o prog): '))
        soma = soma + usuario;

        if (usuario == 0) {
            console.log('A soma foi de: ', soma);
            break;
        }
    }
}

ex013();