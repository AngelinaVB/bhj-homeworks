const holeGame = document.getElementsByClassName("hole-game");
const kill = document.getElementById("dead");
const miss = document.getElementById("lost");
let countKill = 0;
let countLost = 0;

for (let index = 1; index <= 9; index++) {
    let hole = document.getElementById(`hole${index}`);
    hole.onclick = function () {
        if (hole.className.includes("hole_has-mole")) {
            countKill++;
            kill.textContent = countKill;
            if (countKill > 3) {
                alert("Вы выиграли!");
                kill.textContent = 0;
                miss.textContent = 0;
            }
            else { return; }
        }
        else {
            countLost++;
            miss.textContent = countLost;
            if (countLost > 5) {
                alert("Вы проиграли!");
                kill.textContent = 0;
                miss.textContent = 0;
            }
            else { return; }
        };
    };
};
