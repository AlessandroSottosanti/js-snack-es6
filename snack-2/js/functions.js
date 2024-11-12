//ottiene un numero random da 0 a un massimo passato come argomento

function getRandomNumber(max) {
    return Math.floor(Math.random() * max);
}

function getCopy(array) {
     // ottengo la copia
     return JSON.parse(JSON.stringify(array));
    }

function getSecondArray(array) {
    //elimino  i punti dall''array
    for(i = 0; i< array.length; i++) {
        curItem = array[i];
        delete curItem.punti;
    }
    return array;
}