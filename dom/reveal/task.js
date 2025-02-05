
const elem = document.querySelectorAll('.reveal');
const elemArray = Array.from(elem);

elemArray.forEach((index) => {
document.addEventListener('scroll', function () {
    const scrollPosition = document.documentElement.scrollTop;
    const rect = elemArray[index].getBoundingClientRect();
    if (scrollPosition == rect) {
        elemArray[index].classList.add('reveal_active');
    }
    else {
        elemArray[index].classList.remove('reveal_active');
    }
});
});

