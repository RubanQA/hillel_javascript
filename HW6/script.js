let score = 0;
let answer1 = prompt('Сколько будет 2+2?');
if (answer1 === '4') {
    score += 10;
}

let answer2 = prompt('Солнце встает на востоке?');
if (answer2.toLowerCase() === 'да') {
    score += 10;
}

let answer3 = prompt('Сколько будет 5 / 0?');
if (answer3 === '0') {
    score += 10;
}

let answer4 = prompt('Какого цвета небо?');
if (answer4.toLowerCase() === 'синее') {
    score += 10;
}

let answer5 = prompt('Какой правильный ответ на главный вопрос жизни, вселенной и всего такого?');
if (answer5 === '42') {
    score += 10;
}

alert(`Ваш результат: ${score} з 50 очков`);