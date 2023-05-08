const input = "cAPS";

let primeiraLetra = input.slice(0,1);
let restante = input.slice(1);

    
    if (input === input.toUpperCase()){
        console.log(input.toLowerCase());
    } else if ( input === input[0].toLowerCase() + restante.toUpperCase()){
        console.log(primeiraLetra.toUpperCase() + restante.toLowerCase());
    } else {
        console.log(input);
    }