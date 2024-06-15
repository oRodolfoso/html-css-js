// 1 - Criando uma função

// function minhaFuncao() {
//     console.log("Testando");
// }

// minhaFuncao();
// minhaFuncao();

// const minhaFuncaoEmVariavel = function() {
//     console.log("Função em variável")
// }

// minhaFuncaoEmVariavel();

// function funcaoComParametro(txt) {
//     console.log(`Imprimindo: ${txt}`);
// }

// funcaoComParametro("Imprimindo alguma coisa!");
// funcaoComParametro("Outra função!");

// // 2 - Return

// const a = 10
// const b = 20
// const c = 30
// const d = 40

// function soma(n1,n2,) {
//     return n1 + n2;
// }

// const resultado = soma(a,b);

// console.log(resultado);

// console.log(soma(c,d));

// // 3 - Escopo da função

// let y = 30;

// function testandoEscopo() {
//     let y = 10;
//     console.log(`Y dentro da função é: ${y}`);
// }

// y = 15;

// testandoEscopo();

// console.log(`Y fora da função é: ${y}`);

// testandoEscopo();

// // 4 - Escopo aninhado

// let m = 10

// function escopoAninhado() {
//     let m = 20;

//     if(true) {
//         let m = 30;

//         if(true) {
//             let m = 40;
//             console.log(m);
//         }

//         console.log(m);
//     }

//     console.log(m);
// }

// escopoAninhado();

// console.log(m);

// // 5 - arrow function

// const testeArrow = () => {
//     console.log("Está é uma arrow function");
// };

// testeArrow();

// const parOuImpar = (n) => {
//     if(n % 2 === 0) {
//         console.log("Par");
//         return

//     }

//     console.log("Impar");
// };

// parOuImpar(5);

// parOuImpar((10));

// // 6 - mais sobre arrow function

// const raizQuadrada = (x) => {
//     return x * x;
// };

// console.log(raizQuadrada(4));

// const raizQuadrada2 = (x) => x * x

// console.log(raizQuadrada(5));

// console.log(raizQuadrada(12));

// const helloWorld = () => console.log("Hello World");

// helloWorld();

// // 7 - Parametro opcional

// const multiplication = function(m, n) {
//     if(n === undefined) {
//         return m * 2
//     } else{
//         return m * n
//     }
// }

// console.log(multiplication (5));

// console.log(multiplication(2, 4));

// const greeating = (name) => {
//     if(!name) {
//         console.log("Olá!")
//         return
//     }

//     console.log(`Olá ${name} !` )
// }

// greeating();
//  greeating("Rodolfo");

// 8 - Valor default

const customGReeating = (name, greet = "Olá") => {
    return `${greet}, ${name} !`;
}

console.log(customGReeating("Rodolfo"));

console.log(customGReeating("Lucas", "Bom dia"));

const repeatText = (text, repeat = 2) => {
    for (let i = 0; i < repeat; i++) {
        console.log(text);
    }
};

repeatText("Testando");

repeatText("Agora repete 5 vezes" , 5);

// 9 - Closure

function someFunction() {
    let txt = "Alguma coisa"

    function display() {
        console.log(txt)
    }

    display()
}

someFunction();

// 10 - Mais sobre Closures

const mulplicationClosure = (n) => {
    return (m) => {
        return n * m;
    };
};

const c1 = mulplicationClosure(5)

const c2 = mulplicationClosure(10)

console.log(c1);
console.log(c2);

console.log(c1(5));
console.log(c2(10));

// 11 - Recursion

const untilTen = (n, m) => {
    if (n < 10) {
        console.log("A função parou de executar!")
    } else {
        const x = n - m

        console.log(x)

        untilTen(x, m)
    }
}

untilTen(100, 7);

// infite recursion

// function run() {
//     console.log("Executando...");
//     run();
// }

// run()

function factorial(x) {
    if(x === 0) {
        return 1
    } else{
        return x * factorial(x - 1)
    }
}

const num = 6

const result = factorial(num)

console.log(`O fatorial do número ${num} é ${result}`);



