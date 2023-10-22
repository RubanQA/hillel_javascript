let a, b, h, sumFactorials = 0;
do {
    a = parseInt(prompt("Enter value for a: (must be a number)"));
} while (isNaN(a));

do {
    b = parseInt(prompt("Enter value for b (greater than a): (must be a number)"));
} while (isNaN(b) || b <= a);

do {
    h = parseInt(prompt("Enter value for h (greater than 0): (must be a number)"));
} while (isNaN(h) || h <= 0);

for (let i = a; i <= b; i += h) {
    let factorial = 1;
    for (let j = 1; j <= i; j++) {
        factorial *= j;
    }
    sumFactorials += factorial;
}
alert(`The sum of factorials of numbers from ${a} to ${b} with step ${h} is ${sumFactorials}`);