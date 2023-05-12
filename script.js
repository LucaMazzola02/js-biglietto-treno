let chilometri = parseInt(prompt("Quanti chilometri deve percorrere?"));

let age=parseInt(prompt("Quanti anni ha?"));

//calcolo: let prezzo = ( 0.21 * km)

let prezzo = chilometri * 0.21;

 //per la percentuale basta fare *0.20 o *0.40 :DD

    let spesa;

if (age < 18) {

    spesa = prezzo * 0.80; //sconto del 20%
    
} else if (age > 65) {

    spesa = prezzo * 0.60; //sconto del 40%
    
} else {

    spesa = prezzo;  //prezzo intero

}


// converto il prezzo con massimo dues decimali

let spesaNetta = spesa.toFixed(2);

document.getElementById("output").innerHTML = spesaNetta += ' € ';

