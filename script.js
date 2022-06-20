document.addEventListener("DOMContentLoaded", () => {
  //cats array
  let catArray = [
    { img: "https://i.imgur.com/7yWazQM.jpg", id: 1, name: "fluffy" },
    { img: "https://i.imgur.com/Ui4Ea4d.jpg", id: 2, name: "bella" },
    { img: "https://i.imgur.com/5N3I2xt.jpg", id: 3, name: "daisy" },
    { img: "https://i.imgur.com/Z39MxEg.jpg", id: 4, name: "oli" },
    { img: "https://i.imgur.com/aK0Ki8S.jpg", id: 5, name: "lola" },
    { img: "https://i.imgur.com/Kx8mqhe.jpg", id: 6, name: "lily" },
    { img: "https://i.imgur.com/7yWazQM.jpg", id: 1, name: "fluffy" },
    { img: "https://i.imgur.com/Ui4Ea4d.jpg", id: 2, name: "bella" },
    { img: "https://i.imgur.com/5N3I2xt.jpg", id: 3, name: "daisy" },
    { img: "https://i.imgur.com/Z39MxEg.jpg", id: 4, name: "oli" },
    { img: "https://i.imgur.com/aK0Ki8S.jpg", id: 5, name: "lola" },
    { img: "https://i.imgur.com/Kx8mqhe.jpg", id: 6, name: "lily" },
  ];

  catArray.sort(() => 0.5 - Math.random());

  const grid = document.querySelector(".grid");
  const resultDisplay = document.querySelector("#score");
  const message = document.querySelector(".msg");
  const playAgain = document.querySelector(".play-again");
  const shake = document.querySelector(".shake");
  let catsChosen = [];
  let catsChosenId = [];
  let cardsWon = [];

  //create game board
  const gameBoard = () => {
    for (let i = 0; i < catArray.length; i++) {
      const card = document.createElement("img");
      card.setAttribute("src", 'https://i.imgur.com/ZWfjvzy.jpg"');
      card.setAttribute("data-id", i);
      card.addEventListener("click", flipCard);
      grid.appendChild(card);
      console.log("click");
    }
  };

  //check for matching cats
  const checkForMatch = () => {
    const cards = document.querySelectorAll("img");
    const optionOneId = catsChosenId[0];
    const optionTwoId = catsChosenId[1];

    if (optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute(
        "src",
        'https://i.imgur.com/ZWfjvzy.jpg"'
      );
      cards[optionTwoId].setAttribute(
        "src",
        'https://i.imgur.com/ZWfjvzy.jpg"'
      );
    } else if (catsChosen[0] === catsChosen[1]) {
      message.style.visibility = "visible";
      cards[optionOneId].setAttribute("src", "https://i.imgur.com/wvHyjOR.jpg");
      cards[optionTwoId].setAttribute("src", "https://i.imgur.com/wvHyjOR.jpg");
      cards[optionOneId].removeEventListener("click", flipCard);
      cards[optionTwoId].removeEventListener("click", flipCard);
      cardsWon.push(catsChosen);
    } else {
      cards[optionOneId].setAttribute(
        "src",
        'https://i.imgur.com/ZWfjvzy.jpg"'
      );
      cards[optionTwoId].setAttribute(
        "src",
        'https://i.imgur.com/ZWfjvzy.jpg"'
      );
      message.style.visibility = "hidden";
    }
    catsChosen = [];
    catsChosenId = [];
    resultDisplay.textContent = cardsWon.length;
    if (cardsWon.length === catArray.length / 2) {
      resultDisplay.textContent = "Congratulations! You found them all!";
      playAgain.style.display = "inline";
    }
  };

  //flip your card
  function flipCard() {
    let cardId = this.getAttribute("data-id");
    catsChosen.push(catArray[cardId].name);
    catsChosenId.push(cardId);
    this.setAttribute("src", catArray[cardId].img);
    if (catsChosen.length === 2) {
      setTimeout(checkForMatch, 400);
    }
  }
  
    
    gameBoard();
});