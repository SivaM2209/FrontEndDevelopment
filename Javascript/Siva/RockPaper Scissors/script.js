let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let userScr = document.querySelector("#userScr");
let devinScr = document.querySelector("#devinScr");
let userScore = 0;
let devinScore = 0;

let gameDraw = () => {
    console.log("Game was a Draw!");
    msg.innerText = "The Game Ended as a Draw!"
}

let showWinner = (userWon) => {
    if(userWon === true) {
        console.log("YOU WON!");
        msg.innerText = "You Won! :)"
        userScore++;
        userScr.innerText = userScore;
    } else {
        console.log("You Lost! :(");
        msg.innerText = "You Lost! :("
        devinScore++;
        devinScr.innerText = devinScore;
    }
}

let genDevinChoice = () => {
    options = ["Rock", "Paper", "Scissors"]
    let randNum = Math.floor(Math.random() * 3)
    return options[randNum];
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let userChoice = choice.getAttribute("id");
        game(userChoice);
    })
});

let game = (userChoice) => {
    let DevinChoice = genDevinChoice();
    console.log(DevinChoice);
    console.log(userChoice);

    if(userChoice === DevinChoice) {
        gameDraw();
    } else {
        let userWon = true;
        if(userChoice === "Rock") {
            if(DevinChoice === "Paper") {
                userWon = false;
            } else {
                userWon = true;
            };
        } else if (userChoice === "Paper") {
            if(DevinChoice === "Rock") {
                userWon = true;
            } else {
                userWon = false;
            };
        } else {
            if(DevinChoice === "Rock") {
                userWon = false;
            } else {
                userWon = true;
            };
        };
        showWinner(userWon);
    };
}

