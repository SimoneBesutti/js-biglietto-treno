var saluto, percorso, etapasseggero, costoPercorso, scontoPercorso;

saluto = "Benvenuto nella sezione shop ticket"
alert(saluto);

percorso = prompt("Inserire il numero dei km da percorrere");

etapasseggero = prompt("Inserire l'età del passeggero");

costoPercorso = percorso * 0.21;

if (etapasseggero < 18) {
    scontoPercorso=costoPercorso*20/100;
    costoPercorso = costoPercorso - scontoPercorso;
}

if (etapasseggero > 65 ) {
    scontoPercorso=costoPercorso*40/100;
    costoPercorso = costoPercorso - scontoPercorso;
}

document.getElementById('mio_id').innerHTML = "Il costo del percorso sarà di " + costoPercorso + " euro";

