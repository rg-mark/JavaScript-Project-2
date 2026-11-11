//1. String Manipulations

//Reverse a String

function reverseString(str) {
    return [...str].reverse().join("");
}
//Count Characters
function countCharacters(str) {
    return [...str].length;
}
//Capitalize Words
function capitalizeWords(sentence) {
    return sentence
    .toLowerCase()
    .replace(/(^\s)\S/g, (match) => match.toUpperCase())
}

//2. Array Functions

//Find Maximum and Minimum
function findMax(arr) {
    if (arr.length === 0) throw new Error ("Array is empty");
    let max = arr[0];
    for (const n of arr) if (n > max) max = n;
    return max;
}

function findMin(arr) {
    if (arr.length === 0) throw new Error("Array is empty");
    let min = arr[0];
    for (const n of arr) if (n < min) min = n;
    return min;
}
//Sum of Array
function sumArray(arr){
return arr.reduce((total, n) => total + n, 0);
}
//Filter Array
function filterArray(arr, condition) {
    const result = [];
    for (const item of arr) {
        if (condition(item)) result.push(item);
    }
    return result;
}
//3. Mathematical Functions

//Factorial
function factorial(n) {
    if (!Number.isInteger(n) || n < 0) {
        throw new Error("Factorial needs a non-negative integer");
    }
    let result = 1;
    for (let i = 2; i <= n; i++) result *=i;
    return result;
}
//Prime Number Check
function isPrime(n) {
    if (!Number.isInteger(n) || n < 2) return false;
    if (n < 4) return true; //2 and 3
    if (n % 2 === 0 || n % 3 === 0) return false;
    for (let i = 5; i * i <= n; i += 6) {
        if(n % i === 0 || n % (i + 2) === 0) return false;
    }
    return true;
}
//Fibonacci Sequence
function fibonacci(terms) {
    if (!Number.isInteger(terms) || terms < 0) {
        throw new Error("Terms must be non-negative integer");
    }
    const seq = [];
    let a = 0, b = 1;
    for (let i = 0; i < terms; i++) {
        seq.push(a);
        [a, b] = [b, a + b];
    }
    return seq;
}