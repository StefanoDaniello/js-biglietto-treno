/*
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca. 
*/

let kilometres = prompt ('quanti chilometri devi percorrere');
let age = prompt ('age');
console.log(kilometres, age);

if (isNaN (kilometres) || isNaN (age)){
    console.log('errore inserisci un numero!')
}

let ticket = kilometres*0.21 ;
let sconto20;
let sconto40;

if(age < 18){
   sconto20 =ticket*20 /100;
   document.getElementById('price').innerHTML ='Il tuo biglietto costa: ' + sconto20 + (" \u20AC");
   console.log(`il tuo biglietto costa: ${sconto20}`);
}else if (age > 65){
   sconto40 =ticket*40 /100;
   document.getElementById('price').innerHTML ='Il tuo biglietto costa: ' + sconto40 + (" \u20AC");
   console.log(`il tuo biglietto costa: ${sconto40}`);
}else if(age>=18 && age<=65){
    document.getElementById('price').innerHTML ='Il tuo biglietto costa: ' + ticket + (" \u20AC");
    console.log( `il tuo biglietto costa: ${ticket}`);
}

    
