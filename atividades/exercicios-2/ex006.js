const funcionarios = [
    {nome: 'Vinicius', cargo: 'Operador de caixa', salario: 1500.00},
    {nome: 'Guilherme', cargo: 'Gerente', salario: 5000.00},
    {nome: 'Gabriela', cargo: 'Estagiaria', salario: 900.00},
];

for (let i of funcionarios) {

    if (i.salario > 2000.00) {
        console.log(i);
    }
}