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

const container = document.querySelector(".container");

let numbers = [];

numbers = randomGenerator(numbers)

