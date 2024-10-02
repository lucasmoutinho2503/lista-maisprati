const alunos = [
    {nome: 'Vitor', nota1: 7.0, nota2: 7.0},
    {nome: 'Andreia', nota1: 2.0, nota2: 9.0},
    {nome: 'Julio', nota1: 8.0, nota2: 10.0}
];

for (let i of alunos) {
    let media = (i.nota1 + i.nota2) / 2;
    
    i.medias = media;

    console.log(`Nome: ${i.nome}` );
    console.log(`Média: ${i.medias}` );
    console.log('--------------')
}