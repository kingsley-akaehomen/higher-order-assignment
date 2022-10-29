
// EXERCISE 1 SOLUTION - COUNTDOWN

function countDown(time) {
    let timerCount = setInterval(() => {
        time--;
        if (time <= 0) {
            clearInterval(timerCount);
            console.log('DONE')
        } else console.log(time)
    }, 1000)
}

//countDown(4) // calling the function

// EXERCISE 2 SOLUTION - RANDONGAME

function randomGame() {
    let count = 0;
    let timer = setInterval(() => {
        let random = Math.random()
        count++
        if (random > 0.75) {
            clearInterval(timer);
            console.log('It took ' + count + ' attemp/attemps');
        }
        else console.log(random)
    }, 1000)
}

//randomGame()

// EXERCISE 3 SOLUTION - isEven

function isEven(num) {
    if (num % 2 === 0) {
        return true;
    }
    return true;
}

//console.log(isEven(2)) //true
//console.log(isEven())  //false

// EXERCISE 4 SOLUTION - isOdd


function isOdd(num) {
    if (num % 2 !== 0) {
        return true;
    }
    return false;
}

//console.log(isOdd(3)) //true
//console.log(isOdd(14))  //false

// EXERCISE 5 SOLUTION - isPrime

function isPrime(i) {
    for (let j = 2; j < i; j++) {
        if (i % j == 0)
            return false;
    }
    return true;
}

//console.log(isPrime(8)) //false
//console.log(isPrime(17)) //true

// EXERCISE 6 SOLUTION - numberFact

function numberFact(number, callback) {
    return callback(number);
}


//console.log(59, isOdd(59)); //true
//console.log(59, isEven(59)); //false
//console.log(59, isPrime(59)); //true

// EXERCISE 7 SOLUTION - find

function find(arr, callback) {
    for (let value in arr) {
        if (callback(arr[value])) {
            return arr[value];
        }
    };
    //return null;
}

const finder = find([8, 11, 4, 27], function (val) { return val >= 10 });
//console.log(finder) // returns 11 
const finderr = find([8, 11, 4, 27], function (val) { return val === 5 })
//console.log(finderr);

// EXERCISE 8 SOLUTION - findIndex

function findIndex(arr, callback) {
    for (var i = 0; i < arr.length; i++) {
        if (callback(arr[i]) === true) {
            return arr.indexOf(arr[i]);
        }
    };
    return undefined;
}

const res = findIndex([8, 11, 4, 27], function (val) { return val >= 10 });
//console.log(res)
const ress = findIndex([8, 11, 4, 27], function (val) { return val === 5 });
//console.log(ress)

// EXERCISE 9 SOLUTION - specialMultiply
function specialMultiply(a, b){
    if (arguments.length === 1) {
        return function (b) {
            return a * b;
        }
    }
    return a * b;
}

const result1 = specialMultiply(3, 4); 
const result2 = specialMultiply(3)(4); 
const result3 = specialMultiply(3); 
console.log(result1); // 12
console.log(result2); //1 2
console.log(result3); // returns a function