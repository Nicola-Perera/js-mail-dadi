// programma per far giocare a dadi utente vs computer

alert('IL GIOCO DEI DADI: premi invio lanciare un dado a 6 facce. Se il tuo risultato supera quello del banco HAI VINTO !!');
let userDieResult = Math.floor(Math.random() * 6 + 1);
console.log(userDieResult);

let computerDieResult = Math.floor(Math.random() * 6 + 1);
console.log(computerDieResult);

