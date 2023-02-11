function getCube (number) {
    return Math.pow(number, 3); //number*number*number
}
test = getCube (2);
console.log(test);

let number = prompt('Какую зарплату вам обещают до вычета налогов?');
function salary (number) {
    if (isNaN(number)) {
        alert ('Значение задано неверно');
    } else return number * 0,87;
}
let result = salary (number);
console.log(`Размер заработной платы за вычетом налогов равен ${result} рублей!`);

let num1 = prompt('Введите первое число: ');
let num2 = prompt('Введите второе число: ');
let num3 = prompt('Введите третье число: ');
function findMax(num1, num2, num3) {
    let result = Math.max (num1, num2, num3);
    console.log(`Максимальное число = ${result}`);
}
findMax(number1, number2, number3);

let number1 = parseInt(prompt('Введите первое число:'));
let number2 = parseInt(prompt('Введите второе число:'));
function sum (number1, number2) {
    return number1 + number2;
}

function multy (number1, number2) {
    return number1 * number2;
}

function div (number1, number2) {
    return number1 / number2;
}

function sub (number1, number2) {
    if (number1 > number2) {
        return number1 - number2;
    }
    else return number2 - number1;
}
console.log (sum (number1, number2));
console.log (multy (number1, number2));
console.log (div (number1, number2));
console.log (sub (number1, number2));