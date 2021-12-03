function randomGenerator(array) {

    for(let i = 0; i < 5; i++) {
        let rndNumber= Math.floor(Math.random() * 100) + 1;
    
        while(array.includes(rndNumber)) {
    
            rndNumber= Math.floor(Math.random() * 100) + 1;
        }
    
        array.push(rndNumber);
    }

    return numbers;
}

function printNumber(container, numbers) {

    for(let i = 0; i < 5; i++) {
        container.append(numbers[i] + " ");
    }
}

function fillMyNumbers(guessArray) {

    for(let i = 0; i < numbers.length; i++) {
            
        let myNum = parseInt(prompt(`Inserisci il ${i+1} numero da indovinare (da 1 a 100)`));

        while(myNum < 1 || isNaN(myNum)) {

            myNum = parseInt(prompt(`Inserisci il ${i+1} numero da indovinare (da 1 a 100)`));
        }

        guessArray.push(myNum);
    }

    return guessArray;
}

const container = document.querySelector(".container");

let numbers = [];

numbers = randomGenerator(numbers)

printNumber(container, numbers);

setTimeout(clearDom, 3000);

function clearDom() {

    container.innerHTML = "";

    setTimeout(guess, 30000);

    function guess() {
        let guessArray = [];
        let guessed = [];
        let count = 0;

        guessArray = fillMyNumbers(guessArray);

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

