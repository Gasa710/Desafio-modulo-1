const valores = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const min = 2;
const max = 6;

let listaAtualizada = [];
    
    for (item of valores){
        if (item >= min && item <= max){
            listaAtualizada.push(item);
        }
            
    }
  console.log(listaAtualizada);