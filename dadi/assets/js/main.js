// dice game: user vs computer

// game rules
alert('IL GIOCO DEI DADI: premi invio lanciare un dado a 6 facce. Se il tuo risultato supera quello del banco HAI VINTO !!');

// user roll
let userDieResult = Math.floor(Math.random() * 6 + 1);
const userNumber = document.getElementById('user_roll');
userNumber.innerHTML = 'hai fatto ' + userDieResult;

// computer roll
let computerDieResult = Math.floor(Math.random() * 6 + 1);
const computerNumber = document.getElementById('computer_roll');
computerNumber.innerHTML = 'il banco ha fatto ' + computerDieResult;

const rollResult = document.getElementById('dice_result');

// win-lose-draw conditions
if (userDieResult > computerDieResult) {
    const win = `<h1>HAI VINTO :D</h1>`;
    rollResult.innerHTML = win;
}
else if (userDieResult < computerDieResult) {
    const lose = `<h1>hai perso :(</h1>`;
    rollResult.innerHTML = lose;
}
else if (userDieResult === computerDieResult) {
    const draw = `<h1>Pareggio! riprova</h1>`;
    rollResult.innerHTML = draw;
}

