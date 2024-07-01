// 1 - strict

"use strict";

// opa = "teste";

const opa = "teste";

// const undefined = 10;

// delete[].length;

//  2 - console.log

let a = 1
let b = 2

if(a == 1) {
    a = b + 2
}

console.log(a);

for (let i = 0; i < b; i++) {
    a = a + 2;
    console.log(a);
}

if (a > 5) {
    a = 25;
}

console.log(a);

// 3 - Tratamento de dado por função

function checkNumber(n) {
    const result = Number(n)

    if(Number.isNaN(result)) {
        console.log("Valor incorreto!");
        return result;
    }
    
    console.log("Valor correto!")
    return result;

}

checkNumber(5);
checkNumber("10");
checkNumber({});
checkNumber("teste");

// 4 - Exceptions

let x = 10

if(x != 11) {
    // throw new Error("O valor de x não pode ser diferente de 11!");

}

// 5 - Try Catch

try {
    const soma = x + y;

} catch(error) {
    console.log(`Erro no programa: ${error}`);
}
 

// 6  - Finally

try {
    const value = checkNumber("1")

        if (!value) {
            throw Error("Valores inválidos")
        }
} catch (error) {
    console.log(`Opa, aconteceu um problema ${error}`);
} finally {
    console.log("O código foi executado!");
    
}

// 7 - Assertions

function checkArray(arr) {
    if (arr.length === 0) {
        throw new Error ("O array precisa ter elementos");
    } else{
        console.log(`O array tem ${arr.length} elementos`);
    }
}

// checkArray([]);


checkArray([1, 2, 3]);