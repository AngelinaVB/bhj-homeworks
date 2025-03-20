const mainPage = document.getElementById('book');
const textFontSize = Array.from(document.querySelectorAll('.font-size'));

textFontSize.forEach((elem, index) => {
    elem.addEventListener('click', function (event) {
        event.preventDefault();

        function indexActive(element) { return element.classList.contains('font-size_active') };
        let idElem = textFontSize.findIndex(indexActive);
        let dataElement = event.target.dataset.size;

        textFontSize[idElem].classList.remove('font-size_active');
        mainPage.classList.remove('book_fs-small');
        mainPage.classList.remove('book_fs-big');
        textFontSize[index].classList.add('font-size_active');

        switch (dataElement) {
            case 'small':
                mainPage.classList.add('book_fs-small');
                break;
            case 'big':
                mainPage.classList.add('book_fs-big');
                break;
        }
    });
});
