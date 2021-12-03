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
            
        let myNum = parseInt(prompt(`Inserisci il ${i+1} numero da indovinare`));

        while(myNum < 1 || isNaN(myNum)) {

            myNum = parseInt(prompt(`Inserisci il ${i+1} numero da indovinare`));
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

    setTimeout(guess, 500);

    function guess() {
        let guessArray = [];

        guessArray = fillMyNumbers(guessArray);

        console.log(guessArray);

    }

    
}

