const filmes = [
    {titulo: 'Era de Ultron', diretor: 'Joss Whedon', anoLancamento: 2015},
    {titulo: 'Guerra Infinita', diretor: 'Irmãos Russo', anoLancamento: 2018},
    {titulo: 'Ultimato', diretor: 'Irmãos Russo', anoLancamento: 2019}
];

const apenasTitulo = [];

filmes.forEach(filme => {
    apenasTitulo.push(filme.titulo);
});

console.log(apenasTitulo);