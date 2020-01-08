
// Chiedi all’utente il cognome,
var cognome = prompt('inserisci il tuo cognome');

// inseriscilo in un array con altri cognomi,
var arrayCognomi = ['Lega', 'Mauceri', 'Montalto', 'Cannata', 'Caruso'];

arrayCognomi.push(cognome);
arrayOrdinato = arrayCognomi.sort();

// stampa la lista ordinata alfabeticamente (in html ul > li).
var i = 0;
var posizione = 0;
while (i < arrayOrdinato.length ) {
  document.getElementById('lista_cognomi').innerHTML += '<li>' + arrayOrdinato[i] + '</li>';
  // Scrivi anche la posizione della lista in cui il nuovo utente si trova.
  if (arrayOrdinato[i]==cognome){
  document.getElementById('posizione').innerHTML = i+1;
    }
  i++;

}
document.getElementById('lista_cognomi').classList.add('no_style');
