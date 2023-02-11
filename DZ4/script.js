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

const array = [1, 2, 3, 4, 5, 6, 7];
array.splice (3, 2);
console.log(array);

const digits = [];
for (let index = 0; index < 5; index++) {
   let number = (Math.random()*10);
    digits[index] = parseInt (number);
}
console.log(digits);

let digSum = 0;
for (let index = 0; index < digits.length; index++) {
    digSum += digits[index];
}
console.log(digSum);

let min = Math.min.apply (null, digits);
console.log(min);

for (let index = 0; index < digits.length; index++) {
    if (digits[index] == 3) {
        console.log(digits[index]);
    }
}