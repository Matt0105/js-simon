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

function printNumber(container, numbers) {

    for(let i = 0; i < numbers.length; i++) {
        container.append(numbers[i] + " ");
    }
}

function fillMyNumbers(guessArray, numberToGuess) {

    for(let i = 0; i < numberToGuess; i++) {
            
        let myNum = parseInt(prompt(`Inserisci il ${i+1} numero da indovinare (da 1 a 100)`));

        while(myNum < 1 || myNum > 100 || guessArray.includes(myNum) || isNaN(myNum)) {

            myNum = parseInt(prompt(`Inserisci il ${i+1} numero da indovinare (da 1 a 100)`));
        }

        guessArray.push(myNum);
    }

    return guessArray;
}

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




playBtn.addEventListener("click", function() {

    let numbers = [];
    let numberToGuess;

    container.innerHTML = "";

    numberToGuess = setDifficult(difficult.value);

    numbers = randomGenerator(numbers, numberToGuess)

    printNumber(container, numbers);

    setTimeout(clearDom, 3000);

    function clearDom() {

        container.innerHTML = "";

        setTimeout(guess, 30000);

        function guess() {
            let guessArray = [];
            let guessed = [];
            let count = 0;

            guessArray = fillMyNumbers(guessArray, numberToGuess);

            for(let i = 0; i < guessArray.length; i++) {

                if(guessArray.includes(numbers[i])) {
                    guessed.push(numbers[i])
                    count++;

                }
                console.log(count);
                

            }

            container.innerHTML = `Hai indovinato ${count} numeri<br>`;

            for(let i = 0; i < guessed.length; i++) {
                container.innerHTML += guessed[i] + " ";
            }
            // console.log(guessed);


        }
    }
});



