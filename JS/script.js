// Chiedo all’utente il suo nome,
const userName = prompt("Inserisci il tuo nome");



// chiedo il suo cognome,
const userSurname = prompt("Inserisci il tuo cognome");



// chiedo il suo colore preferito
const favColor = prompt("Inserisci il tuo colore preferito");

// chiedo la sua età
const age = parseInt(prompt("Inserisci la tua età"));


const num = 21;
const sumAge = age + num;

// // Infine scrivi sulla pagina
document.getElementById("concatenazione").innerHTML = userName + userSurname +favColor + sumAge;