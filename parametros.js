// parametros de funcao

function soma(num1, num2) {
return num1 + num2;
}


// console.log(soma(1, 2));
// console.log(soma(124, 532));
// console.log(soma(0, 1));


//parametros x argumentos


// function nomeIdade(nome, idade){
//     return `meu nome é ${nome} e minha idade é ${idade}`;
// }

// console.log(nomeIdade("Victor", 20))

function multiplica(numero1 = 1, numero2 = 1){
    return numero1 * numero2;
}

console.log(multiplica(soma(4, 5), soma(3, 3)))