

var time = 15;
var timerId;

function startTimer() {
    time = 15;
    timer.innerHTML = time;
    timerId = setInterval(() => {
        time--;
        if (time == 0) location.href = "./gameover.html?score=" + score;
        timer.innerHTML = time;
    }, 1500);
}

function resetTime(intervalId) {
    clearInterval(intervalId);
    startTimer();
}

startTimer();

var number1Box = document.getElementById("number1")
var number2Box = document.getElementById("number2")
var number3Box = document.getElementById("number3")

var number1, number2, number3
var score = 0
var operators

function randomise () {
    number1 = Math.round(Math.random() * 150)
    number2 = Math.round(Math.random() * 150)

    if(number1 < number2) {
        var extra = number1
        number1 = number2
        number2 = extra
    }

    operators = Math.ceil(Math.random() * 5)
    switch(operators) {
        case 1:
             number3 = number1 + number2; break;
        case 2: 
             number3 = number1 - number2; break;
        case 3: 
             number3 = number1 * number2; break;
        case 4: 
             number3 = Math.floor(number1 / number2);
             number1 = number2 * number3
        break;
        case 5:
            number3 = number1 % number2;
            break;
    }
    console.log(number1+" "+number2+" "+number3+" "+operators)
    number1Box.innerHTML = number1
    number2Box.innerHTML = number2
    number3Box.innerHTML = number3
}

randomise();

const plus = document.getElementById("plus")
const minus = document.getElementById("minus")
const mul = document.getElementById("mul")
const divide = document.getElementById("divide")
const modulus = document.getElementById("modulus")

plus.onclick = () => {
    if ((number1 + number2) === number3) {
        score++
        randomise();
        resetTime(timerId)
    } else {
        location.href = "gameover.html?score=" + score
    }
}

minus.onclick = () => {
    if ((number1 - number2) === number3) {
        score++
        randomise();
        resetTime(timerId)
    } else {
        location.href = "gameover.html?score=" + score
    }
}

mul.onclick = () => {
    if ((number1 * number2) === number3) {
        score++
        randomise();
        resetTime(timerId)
    } else {
        location.href = "gameover.html?score=" + score
    }
}

divide.onclick = () => {
    if ((number1 / number2) === number3) {
        score++
        randomise();
        resetTime(timerId)
    } else {
        location.href = "gameover.html?score=" + score
    }
}

modulus.onclick = () => {
    if ((number1 % number2) === number3) {
        score++
        randomise();
        resetTime(timerId)
    } else {
        location.href = "gameover.html?score=" + score
    }
}