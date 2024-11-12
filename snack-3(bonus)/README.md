### Esercizio snack 3 (bonus)

## Dati
- array
- a = valore di partenza  (quindi minore di b)
- b = valore di fine

## Esecuzione Logica
- Inizializzaimo le tre variabili;
- creo una funzione ""subArray" che ha come parametri le tre variabili,
| quindi vi inserisco un controllo prima di eseguire la logica per verificare che a sia minore di b, e che b non superi la lunghezza dell'array. 
| Sempre nella funzione creo un array vuoto a cui poi assegnerò il risultato e metterò nel return.
| creo una variabile per l'indice del nuovo array e lo inizializzo a 0
| creo un ciclo che iteri gli elementi dell'array in ingresso compresi tra a e b, assegno al nuovo array all'index precedentemente dichiarato l'elemento corrente e aumento il valore dell'index così assegnerà all'indice successivo il successivo elemento iterato del ciclo
| ritorno il risultato della funzione;
- creo una variabile e gli assegno come valore il risultato della funzione.

## Output
- Stampo in console il valore assegnato a subArray e quindi i numeri compresi nel range tra a e b del mio array.