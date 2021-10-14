// programma per verificare la presenza nella lista membri della mail inserita dall'utente

// lista membri con accesso consentito
const members = [
    'corda.valerio05@gmail.com',
    'lcostin40@gmail.com',
    '4lek.90@gmail.com',
    'diegodenuccio95@gmail.com',
    'samudichio@gmail.com',
    'federico.frasca796@gmail.com',
    'fregonesematteo2@gmail.com',
    'doinaganceriuc@gmail.com',
    'nicola.lilla@gmail.com',
    'lorenzo.lumilio@gmail.com',
    'lucamgns33@gmail.com',
    'alessia.misciagna98@gmail.com',
    'nicola.perera96@gmail.com'
];

const result = document.getElementById('esito');
const submit = document.getElementById('submit');

submit.addEventListener('click', function(){

    // salvo la email dell'utente
    const userMail = document.getElementById('email');
    const userMailValue = userMail.value;

// controllo se la mail inserita dall'utente è uguale ad una presente nella lista
for (let i = 0; i < members.length; i++) {
    let memberMail = members[i];
    
    if (memberMail == userMailValue) {

        const valueTrue = `<h1>La tua email è stata approvata :) BENTORNATO!</h1>`;

        result.innerHTML = valueTrue;
    }
}
})