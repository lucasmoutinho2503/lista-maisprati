let ano = 2000;

if (ano % 4 == 0 && (ano % 100 != 0 || ano % 400 == 0)) {
    console.log('Bissexto');
} else {
    console.log('Não é bissexto!');
}