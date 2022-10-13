
// snack 1
// Crea un array vuoto e chiedi all’utente un numero da inserire nell’array.
// Continua a chiedere i numeri  all’utente e a inserirli nell’array fino a quando a somma degli elementi è minore di 50.

// const lista = [];

// const input = document.querySelector('input');

// let somma = 0;
// let i = 0;

// function aggiungiNumero () {

//     //prendo il valore del input
//     let numeroUtente = parseInt(input.value);



//     lista.push(numeroUtente);

    
//     // somma = somma + numeroUtente
//     somma += numeroUtente

    
    

//     console.log(lista);

//     if(somma >= 50) {
//         // rendi l'input disabilitato
//         input.toggleAttribute('disabled')
//     }

//     // azzera valore input
//     input.value = ""
    
// }

// input.addEventListener('change', aggiungiNumero);


const input = document.querySelector('input');

function creoArray () {
    let numeroUtente = parseInt(input.value);
    console.log(numeroUtente);
    for (let i = 0; i < numeroUtente; i++){
        let lista = [];
        contatore = 10;
        while(lista.length < 10) {
            lista.push(Math.floor(Math.random() * 100) + 1);
            console.log(lista);
        }
    }
}

input.addEventListener('change', creoArray);