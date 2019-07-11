var saluto, percorso, etapasseggero;

saluto = "Benvenuto nella sezione shop ticket"
alert(saluto);

percorso = prompt("Inserire il numero dei km da percorrere");

etapasseggero = prompt("Inserire l'età del passeggero");

document.writeln(Math.floor(percorso *0.21 * 1)); 

if (etapasseggero < 18) {
    Math.floor(percorso / 20);
}