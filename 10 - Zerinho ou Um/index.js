const jogadores = [
    {
      "nome": "Herman",
      "jogada": 1
    },
    {
      "nome": "Rhodes",
      "jogada": 0
    },
    {
      "nome": "Beach",
      "jogada": 0
    },
    {
      "nome": "Laurel",
      "jogada": 0
    },
    {
      "nome": "Beatrice",
      "jogada": 0
    },
    {
      "nome": "Alison",
      "jogada": 0
    },
    {
      "nome": "Saundra",
      "jogada": 0
    },
    {
      "nome": "Klein",
      "jogada": 0
    }
  ]

  let zero = [];
  let um = [];

  for (let item of jogadores){
    if (item.jogada === 0){
        zero.push(item.nome);
    } else {
        um.push(item.nome);
    }
  }


  if (zero.length === 1){
    console.log(zero[0]);
  } else if (um.length === 1){
    console.log(um[0]);
  } else {
    console.log("NINGUEM");
  }