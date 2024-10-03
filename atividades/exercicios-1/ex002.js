function categoriaEtaria(n) {
    if (n <= 12) {
        console.log('Categoria: Criança');
    } else if (n <= 17) {
        console.log('Categoria: Adolescente');
    } else if (n <= 59) {
        console.log('Categoria: Adulto');
    } else {
        console.log('Categoria: Idoso');
    }
}

idade = 12;

categoriaEtaria(idade);