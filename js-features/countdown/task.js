let timer = 59;
/* let timerFormat = new Date (timer * 1000).toISOString().slice(11,19); */
let count;
countDown();

function countDown () {
document.getElementById('timer').innerHTML = timer;
timer--;
if (timer < 0) {
    clearTimeout(count);
    alert('Вы победили в конкурсе!')
}
else {
    count = setTimeout(countDown, 1000);
}
};

