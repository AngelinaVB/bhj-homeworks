const mainPage = document.getElementById('book');
const textFontSize = Array.from(document.querySelectorAll('.font-size'));
const dataElements = document.querySelectorAll('[data-size]');

textFontSize.forEach((elem, index) => {
    elem.addEventListener('click', function (event) {
        event.preventDefault();

        function indexActive(element) { return element.classList.contains('font-size_active') };
        let idElem = textFontSize.findIndex(indexActive);

        textFontSize[idElem].classList.remove('font-size_active');
        textFontSize[index].classList.add('font-size_active');

        if (elem == dataElements[1]) {
            mainPage.classList.add('book_fs-big');
        }
        if (elem == dataElements[0]) {
            mainPage.classList.add('book_fs-small');
        }
    });
});
