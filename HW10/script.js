function main(a = 2, b = 3, c) {
    const result = sum(a, b);
    if (typeof c === 'function') {
        return c(result);
    } else {
        return result;
    }
}

function sum(a, b) {
    return a + b;
}


const result1 = main(); 
const result2 = main(4, 5);
const result3 = main(4, 5, (res) => res * 2);
console.log(result1);
console.log(result2);
console.log(result3);
