//Melhorar isso

function menuEscolha(n) {
    switch (n){
        case 1:
            console.log('Maçã');
            break;
        case 2:
            console.log('Banana');
            break;
        case 3:
            console.log('Kiwi');
            break;
    }
}

let escolha = parseInt(prompt('Escolha um número(1 a 3): '));

menuEscolha(escolha);