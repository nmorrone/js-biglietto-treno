console.log('Calcola del Prezzo del Biglietto')

//Faccio inserire all'utente il chilometraggio del viaggio

let distance = prompt('Quanti Km devi percorrere?')

distance = parseInt(distance)

console.log(distance)

//calcola il prezzo del biglietto senza eventuali sconti
//inserisco funzione per ottenere il risultato con 2 decimali

ticketDraft = (distance * 0.21).toFixed(2)

console.log(ticketDraft)

/* comincio a calcolare eventuali sconti sul prezzo
Chiedo all'utente la sua età */

let age = prompt('Quanti anni hai?')

age = parseInt(age)

console.log(age)


/*inserisco le condizioni di sconto sul biglietto
in base all'età dell'utente */

const ticketPrice = ticketDraft

if (age >= 65) {
    ticketPrice = ticketDraft - (ticketDraft / 100 * 40)
}

else if (age <= 18) {
    ticketPrice = ticketDraft - (ticketDraft / 100 * 20)
}


//ricalcolo il prezzo del biglietto e stampo

console.log(ticketPrice)

//stampo il risultato finale nella pagina HTML

let prezzoFinale = document.getElementById('biglietto')


prezzoFinale.innerHTML = '€' + ticketPrice

