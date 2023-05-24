let sum = 0;
let cards = [];
let hasBlackJack = false;
let isAlive = false;
let message = "";
let money = 100;
let playerName = prompt("Enter your name to start");
let cardsEl = document.querySelector("#cards-el");
let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el");
let cardsHolder = document.querySelector("#cards-holder");
let image1 = document.querySelector("#img-1");
let image2 = document.querySelector("#img-2");
const moneyEl = document.querySelector("#money-el");
const playern = document.getElementById("player-name");

//starting the game
function startGame() {
  while (cards.length > 2) {
    cardsHolder.removeChild(cardsHolder.lastChild);
    cards.pop();
  }

  if (money > 0) {
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];

    if (firstCard == 2) {
      image1.setAttribute("src", "images/2.png");
    } else if (firstCard == 3) {
      image1.setAttribute("src", "images/3.png");
    } else if (firstCard == 4) {
      image1.setAttribute("src", "images/4.png");
    } else if (firstCard == 5) {
      image1.setAttribute("src", "images/5.png");
    } else if (firstCard == 6) {
      image1.setAttribute("src", "images/6.png");
    } else if (firstCard == 7) {
      image1.setAttribute("src", "images/7.png");
    } else if (firstCard == 8) {
      image1.setAttribute("src", "images/8.png");
    } else if (firstCard == 9) {
      image1.setAttribute("src", "images/9.png");
    } else if (firstCard == 10) {
      let randomcard = Math.floor(Math.random() * 3) + 1;
      if (randomcard == 1) {
        image1.setAttribute("src", "images/10.png");
      } else if (randomcard == 2) {
        image1.setAttribute("src", "images/j.png");
      } else if (randomcard == 3) {
        image1.setAttribute("src", "images/q.png");
      } else if (randomcard == 4) {
        image1.setAttribute("src", "images/k.png");
      }
    } else if (firstCard == 11) {
      image1.setAttribute("src", "images/1.png");
    }

    if (secondCard == 2) {
      image2.setAttribute("src", "images/2.png");
    } else if (secondCard == 3) {
      image2.setAttribute("src", "images/3.png");
    } else if (secondCard == 4) {
      image2.setAttribute("src", "images/4.png");
    } else if (secondCard == 5) {
      image2.setAttribute("src", "images/5.png");
    } else if (secondCard == 6) {
      image2.setAttribute("src", "images/6.png");
    } else if (secondCard == 7) {
      image2.setAttribute("src", "images/7.png");
    } else if (secondCard == 8) {
      image2.setAttribute("src", "images/8.png");
    } else if (secondCard == 9) {
      image2.setAttribute("src", "images/9.png");
    } else if (secondCard == 10) {
      let randomcard = Math.floor(Math.random() * 3) + 1;
      if (randomcard == 1) {
        image2.setAttribute("src", "images/10.png");
      } else if (randomcard == 2) {
        image2.setAttribute("src", "images/j.png");
      } else if (randomcard == 3) {
        image2.setAttribute("src", "images/q.png");
      } else if (randomcard == 4) {
        image2.setAttribute("src", "images/k.png");
      }
    } else if (secondCard == 11) {
      image2.setAttribute("src", "images/1.png");
    }

    sum = firstCard + secondCard;
    renderGame();
    decrement();
    isAlive = true;
    hasBlackJack = false;
  } else {
    messageEl.textContent =
      "You don't have enough. Would you like to buy more chips?";
    isAlive = false;
  }
}

//getting a random card
function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber === 1) {
    return 11;
  } else if (randomNumber > 10) {
    return 10;
  } else {
    return randomNumber;
  }
}

//decreasing the money
let decrement = () => {
  money -= 10;
  moneyEl.textContent = `:$${money}`;
};

//Message under the line
function renderGame() {
  cardsEl.textContent = "Cards: ";
  for (i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }
  sumEl.textContent = "Sum: " + sum;
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
    isAlive = true;
  } else if (sum === 21) {
    message = "You've got Blackjack!";
    hasBlackJack = true;
    money += 30;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }

  messageEl.textContent = message;
}

//getting new card
function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    let thirdCard = getRandomCard();
    sum += thirdCard;
    cards.push(thirdCard);

    let image3 = document.createElement("img");
    image3.setAttribute("class", "card");
    cardsHolder.appendChild(image3);
    if (thirdCard == 2) {
      image3.setAttribute("src", "images/2.png");
    } else if (thirdCard == 3) {
      image3.setAttribute("src", "images/3.png");
    } else if (thirdCard == 4) {
      image3.setAttribute("src", "images/4.png");
    } else if (thirdCard == 5) {
      image3.setAttribute("src", "images/5.png");
    } else if (thirdCard == 6) {
      image3.setAttribute("src", "images/6.png");
    } else if (thirdCard == 7) {
      image3.setAttribute("src", "images/7.png");
    } else if (thirdCard == 8) {
      image3.setAttribute("src", "images/8.png");
    } else if (thirdCard == 9) {
      image3.setAttribute("src", "images/9.png");
    } else if (thirdCard == 10) {
      let randomcard = Math.floor(Math.random() * 3) + 1;
      if (randomcard == 1) {
        image3.setAttribute("src", "images/10.png");
      } else if (randomcard == 2) {
        image3.setAttribute("src", "images/j.png");
      } else if (randomcard == 3) {
        image3.setAttribute("src", "images/q.png");
      } else if (randomcard == 4) {
        image3.setAttribute("src", "images/k.png");
      }
    } else if (thirdCard == 11) {
      image3.setAttribute("src", "images/1.png");
    }

    renderGame();
  }
}

playern.textContent = playerName;
