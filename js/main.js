const chilometri = parseFloat(prompt("Inserisci quanti chilometri devi percorrere"));
const eta = parseFloat(prompt("Inserisci la tua età"));

const prezzoBiglietto = parseInt(0.21 * chilometri);

console.log(prezzoBiglietto)

if(eta < 18){

    const sconto20 = prezzoBiglietto / 100 * 20;
    alert("Il prezzo del tuo biglietto è " + ((prezzoBiglietto - sconto20) * 100 / 100).toFixed(2));

} else if (eta >=65) {

    const sconto40 = prezzoBiglietto / 100 * 40;
    alert("Il prezzo del tuo biglietto è " + ((prezzoBiglietto - sconto40) * 100 / 100).toFixed(2));
    
} else {

    alert("Il prezzo del tuo biglietto è " + prezzoBiglietto);
}