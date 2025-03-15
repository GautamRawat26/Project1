let turn = "X"; // Start with X
let gameOver = false;

const boxes = document.querySelectorAll(".box");
const info = document.querySelector(".info");
const resetButton = document.querySelector(".reset");

const checkWin = () => {
    const boxtext = document.getElementsByClassName("boxtext");
    const wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [6, 4, 2],
    ];

    wins.forEach(e => {
        if (
            boxtext[e[0]].innerText === boxtext[e[1]].innerText && 
            boxtext[e[1]].innerText === boxtext[e[2]].innerText && 
            boxtext[e[0]].innerText !== ""
        ) {
            gameOver = true;
            info.innerText = boxtext[e[0]].innerText + " WON";
        }
    });
};

const handleClick = (e) => {
    if (gameOver) return; // Don't do anything if the game is over

    const box = e.target;
    const boxtext = box.querySelector(".boxtext");

    // If the box is already filled, return
    if (boxtext.innerText !== "") return;

    boxtext.innerText = turn;

    checkWin();

    if (!gameOver) {
        // Switch turn
        turn = turn === "X" ? "O" : "X";
        info.innerText = "Turn for " + turn;
    }
};

const resetGame = () => {
    gameOver = false;
    turn = "X";
    info.innerText = "Turn for X";

    Array.from(boxes).forEach(box => {
        box.querySelector(".boxtext").innerText = "";
    });
};

boxes.forEach(box => {
    box.addEventListener("click", handleClick);
});

resetButton.addEventListener("click", resetGame);
