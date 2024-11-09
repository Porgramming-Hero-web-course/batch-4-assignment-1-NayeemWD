"use strict";
const numbers = [1, 2, 3, 4, 5];
const sumArray = (array) => {
    let sum = 0;
    array.forEach((element) => {
        sum += element;
    });
    return sum;
};
console.log(sumArray(numbers));
