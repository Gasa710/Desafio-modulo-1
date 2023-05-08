const texto = "Cuidado, pois usuarios as vezes deixam espacos vazios no fim do texto sem querer "

let verificacaoDeTexto = texto.split(" ");

let contador = verificacaoDeTexto.length;

for (item of verificacaoDeTexto){
    if (item === ""){
        contador -= 1;
    }
}

console.log(contador);
