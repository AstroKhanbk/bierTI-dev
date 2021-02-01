const clientes = [
    {
        nome: "Andre",
        idade: 36,
        cpf:"123456789",
        email: "andre@email.com",
        fones:["5591231321", "559213452123"],
        dependentes: [
        
        {nome: "Sara Silva",
        parentesco: "filha",
        dataNasc: "20/03/2011"},
        
        {nome: "Samia Maria",
        parentesco: "filha",
        dataNasc:"04/01/2014"}
    
        ],
        saldo:100,
        depositar:function(valor)
        {this.saldo += valor}
    },
    {
        nome: "Juliana",
        cpf:"0987654321",
        dependentes:[{
            nome:"Sophia",
            parentesco:"filha",
            dataNasc:"30/08/2020"
        }]
    }
]

const listaDependentes = [...clientes[0].dependentes,...clientes[1].dependentes]

console.table(listaDependentes)