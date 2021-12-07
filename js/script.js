//genero un array di numeri casuali da indovinare
function randomGenerator(array, elements) {

    for(let i = 0; i < elements; i++) {
        let rndNumber= Math.floor(Math.random() * 100) + 1;
    
        while(array.includes(rndNumber)) {
    
            rndNumber= Math.floor(Math.random() * 100) + 1;
        }
    
        array.push(rndNumber);
    }

    return array;
}

//funzione che crea e stampa le card contenente i numeri generati casualmente
function printNumber(container, numbers) {

    for(let i = 0; i < numbers.length; i++) {
        const card = document.createElement("input");
        card.classList.add("card");
        card.disabled = true;

        card.value = numbers[i];
        container.append(card);
    }

}

//in base alla difficoltà scelgo quante card mostrare
function setDifficult(difficult) {

    if(difficult == "easy") {
        return 5;
    }
    else if(difficult == "medium") {
        return 7;
    }
    else {
        return 9;
    }
}




const container = document.querySelector(".container");
const difficult = document.getElementById("difficult");
const playBtn = document.getElementById("play-btn");


let timer = 0;

playBtn.addEventListener("click", function() {

    let numbers = [];
    let numberToGuess;

    container.innerHTML = "";

    //se l'id del timer è maggiore di 1 vuol dire che è già stato attivato almeno una volta
    if(timer > 0) {
        clearTimeout(timer);
        numberToGuess = setDifficult(difficult.value);
    }
    else {
        numberToGuess = setDifficult(difficult.value);
    }

    alert(`REGOLE:
           - Puoi inserire solo NUMERI da 1 a 100
           - Non puoi ripetere lo stesso numero`);

    numbers = randomGenerator(numbers, numberToGuess)

    printNumber(container, numbers);

    const checkBtn = document.createElement("button");
    checkBtn.classList.add("btn");
    checkBtn.innerHTML = "Check"
    container.append(checkBtn);

    timer = setTimeout(clearDom, 5000);

    function clearDom() {

        //seleziono tutti gli elementi che hanno la classe card e li svuoto dopo 5 secondi
        const myCard = document.querySelectorAll(".card");
        for(let i = 0; i < numberToGuess; i++) {
            myCard[i].value = "";
        }

        setTimeout(guess, 30000); 

        function guess() {
            let guessArray = [];
            let guessed = [];

            //per 30 secondi rendo non cliccabili gli input
            for(let i = 0; i < numberToGuess; i++) {
                myCard[i].disabled = false;
            }

            checkBtn.addEventListener("click", function() {

                let correct = true;
                count = 0;

                //ad ogni click di check svuoto l'array dei numeri da indovinare e gli tolgo l'eventuale classe wrong
                guessArray = [];
                for(let i = 0; i < numberToGuess; i++) {
                    myCard[i].classList.remove("wrong");
                }

                //se i valori degli input sono corretti li pusho nell'array dell'utente altrimenti li segno come sbagliati (rossi)
                for(let i = 0; i < numberToGuess; i++) {
                    if(parseInt(myCard[i].value) > 0 && parseInt(myCard[i].value) <= 100 && !isNaN(parseInt(myCard[i].value)) && !guessArray.includes(parseInt(myCard[i].value))) {
                        guessArray.push(parseInt(myCard[i].value));
                    }
                    else {
                        myCard[i].classList.add("wrong");
                        correct = false;
                    }
                        
                }

                //se gli input sono tutti corretti controllo quali elementi sono stati indovinati e li segno come corretti (verdi)
                if(correct) {
                    for(let i = 0; i < numberToGuess; i++) {
                        if(numbers.includes(parseInt(myCard[i].value))) {
                            myCard[i].classList.add("correct");
                            count++;
                        }
                        myCard[i].disabled = true;
                    }

                    alert(`Hai indovinato ${count} numeri su ${numberToGuess}`);
                }
                console.log(guessArray);
            });

        }
    }
});



