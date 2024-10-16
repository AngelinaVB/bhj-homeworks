const image = document.getElementById("cookie");
const counter = document.getElementById("clicker__counter");
/* let div = document.createElement('div');
let counterSpeed = document.createTextNode("Скорость клика: "); */
/* const counterSpeed = document.getElementById("clicker__counter__speed"); */
let count = 0;
/* let speed = setInterval(function() {count / }, 1000)  */
image.onclick = function clickImage() {
    count++;
    counter.textContent = count;
    
    if (image.width == 200) {
        image.width = 250;
        /* counterSpeed.textContent = speed; */
    }
    else { image.width = 200 };
};


