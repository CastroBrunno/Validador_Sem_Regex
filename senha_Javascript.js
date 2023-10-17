var prompt = require('prompt-sync')();

//programa onde o intuito é criar um validador de senha sem o uso de regex

// - deve ser composta por no mínimo um dígito.
// - deve ser composta por no mínimo um caractere maiúsculo.
// - deve ser composta por no mínimo um caractere minúsculo.
// - deve ser composta por no mínimo um caractere especial.

// A senha deve cumprir pelo menos 2 desses 4 requisitor e com o tamanho superior a 8 caracteres

let senha = prompt("Digite seu senha ");
let contDigito = 0;
let contMai = 0;
let contMin = 0;
let contEspecial=0;

const alfabeto = "abcdefghijklmnopqrstuvwxyz"
const especiais = "!@#$%¨&*()+"
const maiscula = alfabeto.toUpperCase();

for(let i = 0; i<senha.length; i++){
    for(let j = 0; j<=9; j++){
        if(senha.charAt(i) == j){
            contDigito++
        }
    }
    for(let j = 0 ; j<maiscula.length; j++){
        if(senha.charAt(i)==maiscula.charAt(j)){
            contMai++
        }
        if(senha.charAt(i)==alfabeto.charAt(j)){
            contMin++
        }
    }
    for(let j = 0; j<especiais.length; j++){
        if(senha.charAt(i)==especiais.charAt(j)){
            contEspecial++
        }
        
    }    
    
}
let contVetor = 0;
let vetor = [contDigito, contMai, contMin, contEspecial];
for(let i = 0; i<vetor.length;i++){
    if(vetor[i]==0){
        contVetor++
    }
}

if(contVetor>2 || senha.length < 8){
    console.log("senha inválida");
}
else{
    console.log("senha válida");
}