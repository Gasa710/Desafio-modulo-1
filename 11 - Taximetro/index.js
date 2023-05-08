const min = 25;
const km = 11.5;

let valorTempo = 0;
let valorKm = 0 ;

if (min > 20){
    let minutosAbaixo = 20 * 50;
    let minutosAcima = (min - 20) * 30;
    valorTempo = minutosAbaixo + minutosAcima;
} else {
    valorTempo = min * 50;
};

if (km > 10){
    let KmAbaixo = 10 * 70;
    let KmAcima = (km - 10) * 50;
    valorKm = KmAbaixo + KmAcima;
} else {
    valorKm = km * 70;
}

console.log(valorKm + valorTempo);