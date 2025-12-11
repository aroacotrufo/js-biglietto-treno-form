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

