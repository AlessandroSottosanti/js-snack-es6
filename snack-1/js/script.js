
// Ottieni gli elementi da html
const startElem = document.getElementById("start-block");
const btnStartElem = document.getElementById("start");
const randomListNums = document.getElementById("cmp-nums");
const counterElem = document.getElementById("counter");
const formListinputs = document.getElementById("form-list");
const totElement = document.getElementById("tot");

// Dichiara globalmente l'array di numeri random
let randomNums = [];


// Inizializziamo il punteggio
let score = 0;

// Inizializziamo la stringa html da iniettare
let randomList = ``;



// Al click del bottone, esso scompare, ma apparioranno temporaneamente i numeri autogenerati,
// dopo di chè scompariranno ed appariranno gli input.
btnStartElem.addEventListener("click", function () {
    // Preveniamo il ricaricamento della pagina

    startElem.classList.add("visually-hidden");
    randomListNums.classList.add("visually-hidden");


    // TIMER (ed azioni correlate ad esso)
    let time = 10;
    const intervalId = setInterval(function () {
        counterElem.innerHTML = `${time}`;
        time--;
        randomListNums.classList.remove("visually-hidden");

        if (time < 5) {
            counterElem.classList.add("text-danger");
        }

        if (time < 0) {
            clearInterval(intervalId);
            counterElem.classList.add("visually-hidden");
            randomListNums.classList.add("visually-hidden");
            formListinputs.classList.remove("visually-hidden");
        }

    }, 1000);


    // RANDOM NUMS
    randomNums = Array.from({ length: 5 }, () => Math.floor(Math.random() * 100));


    for (let i = 0; i < randomNums.length; i++) {
        currNum = parseInt(randomNums[i]);
        console.log(currNum);
        console.log("array length: ", randomNums.length);
        let newListElement = `<li><div class="border border-primary px-3 py-2 rounded"><h3>${currNum}</h3></div></li>`
        randomList += newListElement;
    }

    console.log("randomList:", randomList);

    randomListNums.innerHTML = randomList;
    console.log(randomListNums);
});

// inizializziamo l'array degli input
const inputNums = [];

// Gestiamo la verifica degli input e dei valori inseriti in essi
formListinputs.addEventListener("submit", function (event) {
    // Preveniamo il ricaricamento della pagina
    event.preventDefault();

    // otteniamo i valori dagli input ed inseriamoli in un array

    const allInputs = document.querySelectorAll("input");
    console.log(allInputs);
    // Reset degli input per la validazione
    allInputs.forEach(input => {
        input.classList.remove("is-invalid", "is-valid");
        document.getElementById(`invalid-${input.name.slice(-1)}`).innerText = ""; // reset messaggio di errore
    });

    inputNums.length = 0; // Reset dell'array per ogni submit

    for (let i = 0; i < allInputs.length; i++) {
        const curInput = allInputs[i];
        const curNum = parseInt(curInput.value.trim());
    
        // Controllo di validità del numero
        if (isNaN(curNum) || curNum < 1 || curNum > 99) {
            curInput.classList.add("is-invalid");
            document.getElementById(`invalid-${i + 1}`).innerText = "Inserisci un numero compreso tra 1 e 99.";
        }
        // Controllo se il numero è valido ma non presente nella lista generata
        else if (!randomNums.includes(curNum)) {
            curInput.classList.add("is-invalid"); 
            document.getElementById(`invalid-${i + 1}`).innerText = ""; 
            inputNums.push(curNum);
        }
        // Se il numero è valido e presente nella lista generata
        else {
            curInput.classList.add("is-valid");
            inputNums.push(curNum);
            score += 1;  // Incrementa il punteggio solo se il numero è corretto
        }
    }
    
    // Verifica punteggio e mostra il risultato
    if (inputNums.length === 5) {
        totElement.innerHTML = `Il tuo punteggio totale è ${score} su ${randomNums.length}.`;
        score = 0;
    } else {
        totElement.innerHTML = "Inserisci tutti i numeri correttamente per procedere.";
        score = 0;
    }
    
});

