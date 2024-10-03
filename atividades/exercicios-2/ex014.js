const empresa = {
    departamentos: [
        {
            nome: 'Financeiro',
            funcionarios: ['Ana', 'Vitor']
        },
        {
            nome: 'Administrativo',
            funcionarios: ['Eduardo', 'Giovani', 'César']
        },
        {
            nome: 'TI',
            funcionarios: ['Lucas']
        }
]};

for (const i in empresa) {

    if (i === 'departamentos'){
        for (const departamento of empresa[i]) {
            for (const func of departamento.funcionarios) {
                console.log(`${func} - ${departamento.nome}`);
            }
        }
    }
}