
// Il programma dovrà chiedere all'utente il numero dei km che vuole percorrere e l'età del passeggero.

// DATI:
// Il prezzo del biglietto è definito in base ai km (0.21€ al km).
// Va applicato uno sconto del 20% per i minorenni.
// Va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali). 



// selezioniamo tutti i campi (select/input)
const nameField = document.getElementById('name-field');
const kmField = document.getElementById('km-field');

// seleziono il form di riferimento
const form = document.querySelector('form');

// PARTE DI OUTPUT
    title.innerText = titleField.value;
    name.innerText = nameField.value.trim();
    km.innerText = kmField.value.trim();
    
    // gestione visibilità della card all'invio
    previewCard.classList.remove("sparisci");

    // pulisco i campi del form dopo l'invio
    form.reset();

