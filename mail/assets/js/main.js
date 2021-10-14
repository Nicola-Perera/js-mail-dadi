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

// chiedo all'utente la sua mail
let userMail = prompt('scrivi la tua email');

// controllo se la mail inserita dall'utente è uguale ad una presente nella lista
for (let i = 0; i < members.length; i++) {
    let memberMail = members[i];
    
    if (memberMail == userMail) {
        console.log('funziona');
    }
}