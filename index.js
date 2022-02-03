
let sum = 0
let cards = []
let hasBlackJack = false
let isAlive = false
let message = ""

let cardsEl = document.querySelector("#cards-el")
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let playerEl = document.getElementById("player-el")

let player = {
    name: "Gilbert",
    chips: 145
}
playerEl.textContent = player.name + ": $" + player.chips

function startGame() {
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
    isAlive = true
}


function getRandomCard() {
    let randomNumber = Math.floor( Math.random() * 13) + 1
    if (randomNumber === 1) {
        return 11
    } else if (randomNumber > 10) {
        return 10
    } else {
        return randomNumber
    }
}


function renderGame() {
    cardsEl.textContent = "Cards: "
    for (i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
        isAlive = true
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    
    messageEl.textContent = message   
}


function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let thirdCard = getRandomCard()
        sum += thirdCard
        cards.push(thirdCard)
        renderGame()
    }
}
