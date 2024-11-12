function getSubArray(array, a, b) {
    // Verifica che a sia minore di b e che b sia entro i limiti dell'array
    if (a < 0 || b >= array.length || a >= b) {
        return "Intervallo non valido";
    }

    const result = [];

    for (let i = a; i <= b; i++) {
        currentItem = array[i];
        result.push(currentItem);
    }

    // OPPURE
    /*
    const result = [];
    let resultIndex = 0;

    for (let i = a; i <= b; i++) {
        result[resultIndex] = array[i];
        resultIndex++;
    }
        */

    return result;
}
