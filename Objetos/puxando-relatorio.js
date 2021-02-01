const cliente = {
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
}

let relatorio = "";

for(let info in cliente)
{
    if(typeof cliente[info] === "object" || typeof cliente[info] === "function")
{
    continue
}
else{
    relatorio += ` 
    ${info} ==> ${cliente[info]} 
    `
}
}

console.log(relatorio)