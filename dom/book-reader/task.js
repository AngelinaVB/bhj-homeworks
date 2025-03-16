const mainPage = document.getElementById('book');
const textFontSize = Array.from(document.querySelectorAll('.font-size'));

textFontSize.forEach((elem, index) => {
    elem.addEventListener('click', function (event) {
        event.preventDefault();

        function indexActive(element) { return element.classList.contains('font-size_active') };
        let idElem = textFontSize.findIndex(indexActive);

        textFontSize[idElem].classList.remove('font-size_active');
        textFontSize[index].classList.add('font-size_active');

        if (textFontSize[0] === elem) {
            mainPage.classList.add('font-size_small');
        }
        else if (textFontSize[2] === elem) {
            mainPage.classList.add('font-size_big');
        };
    });
});
