

function rollDice() {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    const diceElement = document.getElementById('dice');
    diceElement.textContent = randomNumber;
}



function change() {
    const text = document.getElementById("text")
    text.style.color = 'purple'
    text.textContent = 'Paars'
}
