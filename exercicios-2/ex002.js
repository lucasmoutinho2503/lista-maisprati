const livro = {
    titulo: "Nas montanhas da loucura",
    autor: "H. P. Lovecraft",
    anoPublicacao: 1936,
    genero: "Terror"
};

if (!('editora' in livro)){
    livro.editora = "Darkside";
}

for (i in livro) {
    console.log(i + ": " + livro[i]);
}