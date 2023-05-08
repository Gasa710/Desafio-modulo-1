const numeros = [1, 3, 2, 1];

let soma = 0;
    let tamanho = numeros.length;
    let jogador = 1;
    
    for (item of numeros){
        soma += item;
    }
    if (soma % tamanho !== 0){
    console.log(soma % tamanho);
    } else {
        console.log(numeros.length);
    }