
let sum = 0
let cards = []
let hasBlackJack = false
let isAlive = false
let message = ""
let money = 100;
let cardsEl = document.querySelector("#cards-el")
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
const moneyEl = document.querySelector("#money-el");

//starting the game
function startGame() {
      if (money > 0) {
        let firstCard = getRandomCard()
        let secondCard = getRandomCard()
        cards = [firstCard, secondCard]
        sum = firstCard + secondCard
        renderGame()
        decrement()
        isAlive = true
        hasBlackJack = false
  } else {
        messageEl.textContent = "You don't have enough. Would you like to buy more chips?"
        isAlive = false
    }
}

//decreasing the money
let decrement = () => {
    money -= 10
    moneyEl.textContent = `:$${money}`
}

//getting a random card
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

//Message under the line
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
        money += 30
    } else {
        message = "You're out of the game!"
        isAlive = false
    }

    messageEl.textContent = message
}

//getting new card
function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let thirdCard = getRandomCard()
        sum += thirdCard
        cards.push(thirdCard)
        renderGame()
    }
}
