
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

// const input = document.querySelector('input');

// function creoArray () {
//     // prendo il vnumero che utente inserisce
//     let numeroUtente = parseInt(input.value);
//     console.log(numeroUtente);
//     let lista = [];
    
//     for (let i = 0; i < numeroUtente; i++){
//         lista[i] = [];
//         contatore = 10;
//         console.log(lista[i]);
//         console.log(lista);
//         while(lista[i].length < 10) {
//             lista[i].push(Math.floor(Math.random() * 100) + 1);

//         }
        
//         // console.log('lista ' + i + ' : ' + lista[i]);
//         // console.log(lista);
//     }
//     //provo a stampare un elemento della quarta lista alla prima posizione
//     console.log(lista[lista.length-1][0]);
    
// }

// input.addEventListener('change', creoArray);


const lista = [];
const contatore = 10;


// function isInList(array,num) {
//     let check = false;
//     for(let i = 0; i < array.length; i++){
//         if(num === array[i]){
//             check = true;
//         }else {
//             check = false;
//         }
        
//     }
//     return check;
// }

while(lista.length < contatore) {
    let numero = Math.floor(Math.random() * 10) + 1;
    console.log(numero);
    // console.log(!isInList(lista,numero));
    // console.log(lista)
    let check = false;
    for(let i = 0; i < lista.length; i++){
        console.log(lista,numero);
        if(numero === lista[i]){
            check = true;
        }
        
        console.log(check);
    }
    if(!check){
        lista[lista.length] = numero;
    }
}




console.log(lista);


/*

prendo il primo numero dell'array e lo confronto con gli altri 
se il numero è più alto di quello successivo si cambia di posizione
altrimenti rimane li

*/
mettiInOrdine(lista);



// for(let a = 0; a < listaRandom.length; a++){
// for(let i = 0; i < listaRandom.length; i++){
//     let elemento = listaRandom[i];
//     let secondoElemento = listaRandom[i+1];
//     if (elemento > secondoElemento) {
//         listaRandom[i] = secondoElemento;
//         listaRandom[i+1] = elemento;
//     }
// }
// }
console.log(lista);
// for(let i = listaRandom.length; i > 0; i--){
//     let elemento = listaRandom[i];
//     let secondoElemento = listaRandom[i+1];
//     if (elemento < secondoElemento) {
//         listaRandom[i] = secondoElemento;
//         listaRandom[i+1] = elemento;
//     }
// }


const wrapper = document.getElementById('wrapper');

console.log('la lista random: ' + lista);

function mettiInOrdine(listaRandom) {

    for(let a = 0; a < listaRandom.length; a++){
        for(let i = 0; i < listaRandom.length; i++){
            let elemento = listaRandom[i];
            let secondoElemento = listaRandom[i+1];
            if (elemento > secondoElemento) {
                listaRandom[i] = secondoElemento;
                listaRandom[i+1] = elemento;
            }
        }
        }
}