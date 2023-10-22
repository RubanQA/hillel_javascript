const arrLength = parseInt(prompt('Enter the length of the array arrA:'));
const arrA = [];
for (let i = 0; i < arrLength; i++) {
    arrA.push(Math.floor(Math.random() * 100)); 
}
function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    let i = 5;
    while (i * i <= num) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
        i += 6;
    }
    return true;
}
const arrB = arrA.filter(num => isPrime(num));

const minNumber = Math.min(...arrB);
const maxNumber = Math.max(...arrB);

console.log('Array arrA:', arrA);
console.log('Array arrB (prime numbers):', arrB);
console.log('Minimum number in arrB:', minNumber);
console.log('Maximum number in arrB:', maxNumber);
