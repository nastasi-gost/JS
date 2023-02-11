const digit = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let index = 0; index < digit.length; index++) {
    if (digit[index] == 0) {
        console.log (`0 - это ноль`);
    }
    else if (digit[index] % 2 == 0) {
        console.log (`${digit[index]} - чётное число`);
    }
    else console.log (`${digit[index]} - нечётное число`);
}

const digit = [1, 2, 3, 4, 5, 6, 7];
digits.splice (3, 2);
console.log(digit);

const digit = [];
for (let index = 0; index < 5; index++) {
   let number = (Math.random()*10);
    digit[index] = parseInt (number);
}
console.log(digit);

let digSum = 0;
for (let index = 0; index < digit.length; index++) {
    digSum += digit[index];
}
console.log(digSum);

let min = Math.min.apply (null, digit);
console.log(min);

for (let index = 0; index < digit.length; index++) {
    if (digit[index] == 3) {
        console.log(digit[index]);
    }
}