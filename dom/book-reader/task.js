
const a = document.getElementById('book');
const textFontSize = Array.from(document.querySelectorAll('.font-size'));

const dataElements = document.querySelectorAll('[data-size]');

console.log(a);
console.log(textFontSize);
console.log(dataElements[0]);

textFontSize.forEach((elem, index) => {
elem.addEventListener('click', function () {
    function indexActive(element) { return element.classList.contains('font-size_active') };
    let idElem = textFontSize.findIndex(indexActive);
   
    textFontSize[idElem].classList.remove('font-size_active');
    textFontSize[index].classList.remove('font-size_small');
    textFontSize[index].classList.add('font-size_active')

    if (idElem == dataElements[0]) { 
       a.classList.remove('book_fs-small'); 
       a.classList.add('book_fs-small');
    }
    else {a.classList.add('book_fs-big')};
   
});  
});