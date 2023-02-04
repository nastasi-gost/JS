let number1 = prompt ("Введите первое число: ", 0);
let number2 = prompt ("Введите второе число: ", 0);
if (number1 <= 1) {
    console.log (number1);
}
if (number2 >= 3) {
    console.log (number2);
}

let test = true;
(test === true) ? console.log('+++') : console.log('---');

let numberDay = prompt ("Введите число месяца: ", 0);
let result = numberDay / 10;
if (result <= 1) {
    alert ("Сейчас первая декада месяца.");
} else if (result <= 2) {
    alert ("Сейчас вторая декада месяца.");
} else {
    alert ("Сейчас третья декада месяца.");
}