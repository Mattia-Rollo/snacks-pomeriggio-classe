
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




//esercizio facoltativo iserito da gabriel dopo le 18:00
// Fai inserire un numero, che chiameremo N, all’utente.
// Genera N array, ognuno formato da 10 numeri casuali da 1 a 100.
// Ogni volta che ne crei uno, stampalo.

const input = document.querySelector('input');

function creoArray () {
    // prendo il vnumero che utente inserisce
    let numeroUtente = parseInt(input.value);
    console.log(numeroUtente);
    let lista = [];
    
    for (let i = 0; i < numeroUtente; i++){
        lista[i] = [];
        contatore = 10;
        console.log(lista[i]);
        console.log(lista);
        while(lista[i].length < 10) {
            lista[i].push(Math.floor(Math.random() * 100) + 1);

        }
        
        // console.log('lista ' + i + ' : ' + lista[i]);
        // console.log(lista);
    }
    console.log(lista[3][0]);
    // console.log('lista ' + 1 + ' : ' + lista[0],'lista ' + 2 + ' : ' + lista[1]);
    // console.log('lista 1 primo E: ' + lista[0,0]);
    // console.log('lista 2 primo E: ' + lista[1,0]);
}

input.addEventListener('change', creoArray);