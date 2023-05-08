const lista = [8,6,2,4,8,4,17];

let divisorIdade = [];

for (let item of lista){
    if (item >= 18)
        divisorIdade.push(item);
} 
let maiorIdade = divisorIdade[0];

for (let item2 of divisorIdade){
  if (item2 < maiorIdade);
  maiorIdade = item2;
}

if (maiorIdade >= 18){
  console.log(maiorIdade);
} else {
  console.log("CRESCA E APARECA");
}