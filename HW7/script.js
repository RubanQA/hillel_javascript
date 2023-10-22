const suits = ['♠', '♣', '♦', '♥'];
const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

const deck = document.querySelector('.deck');

for (const suit of suits) {
    for (const value of values) {
        const card = document.createElement('div');
        card.classList.add('card');

        const suitElement = document.createElement('div');
        suitElement.classList.add('suit');
        suitElement.textContent = suit;

        const valueElement = document.createElement('div');
        valueElement.classList.add('value');
        valueElement.textContent = value;

        card.appendChild(suitElement);
        card.appendChild(valueElement);

        deck.appendChild(card);
    }
}
