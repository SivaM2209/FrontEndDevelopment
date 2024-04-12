let btns = document.querySelectorAll(".btn");
let resetBtn = document.querySelector("#resetBtn");
let newBtn = document.querySelector("#newBtn");
let msgCont = document.querySelector(".msgCont");

let turnO = true;
let count = 0;

const winCombos = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetGame = () => {
    turnO = true;
    count = 0;
    enableBtns();
    msgCont.classList.add("hide");
};

const newGame = () => {
    turnO = true;
    count = 0;
    enableBtns();
    msgCont.classList.add("hide");
}

const disableBtns = () => {
    for (let btn of btns) {
        btn.disabled = true;
    }
}

const enableBtns = () => {
    for (let btn of btns) {
        btn.disabled = false;
        btn.innerText = "";
    }
}

let gameDraw = () => {
    msg.innerText = `It's a Draw, Try Again..`
    msgCont.classList.remove("hide");
    disableBtns();
}

let gameOver = (winner) => {
    msg.innerText = `Winner is ${winner} :)`;
    msgCont.classList.remove("hide");
    disableBtns();
}

const winnerBoi = () => {
    for (let combo of winCombos) {
        let pos1 = btns[combo[0]].innerText;
        let pos2 = btns[combo[1]].innerText;
        let pos3 = btns[combo[2]].innerText;

        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 === pos2 && pos2 === pos3) {
                console.log(`Winner ${pos1}`);
                gameOver(pos1);
            } 
        };
    };
};



btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (turnO === true) {
            btn.innerText = "O";
            btn.style.color = "#931621";
            turnO = false;
        } else {
            btn.innerText = "X";
            btn.style.color = "white";
            turnO = true;
        }
        btn.disabled = true;
        count++;
        winnerBoi();

        let success = winnerBoi();
        if(count === 9 && !success) {
            gameDraw();
        }
    })

    
});

resetBtn.addEventListener("click", resetGame);
newBtn.addEventListener("click", resetGame);