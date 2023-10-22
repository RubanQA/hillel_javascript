const square = document.getElementById("square");


let colorInterval;


let moveInterval;


const colors = ["red", "blue", "green", "yellow", "orange", "purple", "pink"];


function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}


colorInterval = setInterval(() => {
    square.style.backgroundColor = getRandomColor();
}, 500);


function moveSquare() {
    const maxWidth = window.innerWidth - 100;
    const maxHeight = window.innerHeight - 100;

    const randomX = Math.floor(Math.random() * maxWidth);
    const randomY = Math.floor(Math.random() * maxHeight);

    square.style.left = randomX + "px";
    square.style.top = randomY + "px";
}

moveInterval = setInterval(moveSquare, 1000);
