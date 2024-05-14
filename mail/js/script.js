const listaEmail = ['barbone1912@gmail.com', 'ciao@gmail.com', 'rossellarusso@gmail.com', 'luciadidio@gmail.com','barbone1912@gmail.com', 'ciao@gmail.com', 'rossellarusso@gmail.com', 'luciadidio@gmail.com'];

console.log(listaEmail)

const email = prompt('inserisci la tua email')

if (listaEmail.includes(email)){
    console.log ('puoi accedere');
}else{
    console.log('non puoi entrare')
}