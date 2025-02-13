
const elem = document.querySelectorAll('.reveal');
const rect = elem[0].getBoundingClientRect().bottom;
const rect1 = elem[1].getBoundingClientRect().bottom;

document.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY;

    if (scrollPosition <= rect || scrollPosition <= rect1) {
        elem[0].classList.add('reveal_active');
        elem[1].classList.add('reveal_active');
    }
    else {
        elem[0].classList.remove('reveal_active');
        elem[1].classList.remove('reveal_active');
    }
});

