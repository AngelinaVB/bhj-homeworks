const elemActive = document.querySelectorAll('.reveal');
const elemArray = Array.from(elemActive);
    
elemArray.forEach((elem) => {
    document.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY;
    const rect = elem.getBoundingClientRect().bottom;
  
    if (scrollPosition <= rect) {
        elem.classList.remove('reveal_active');
    }
    else {
        elem.classList.add('reveal_active');
    }
});
});
