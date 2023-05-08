const precos = [200, 150, 50, 100];

let soma = 0 ;
  let menorValor = precos[0];
  
  for (item of precos){
    soma += item;
      if (item < menorValor){
          menorValor = item;

      }
  }
    if (precos.length >= 3){
        console.log(soma - (menorValor/2));
    } else {
        console.log(soma);
    }