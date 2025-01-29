const elemTab = document.querySelectorAll('.tab');
const arrElemTab = Array.from(elemTab);
const elemContentTab = document.querySelectorAll('.tab__content');
const arrElemContentTab = Array.from(elemContentTab);

arrElemTab.forEach((elem, index) => {
  elem.addEventListener('click', function () {
    function indexActive(element) { return element.classList.contains('tab_active') };
    let idElem = arrElemTab.findIndex(indexActive);
    arrElemTab[idElem].classList.remove('tab_active');
    arrElemContentTab[idElem].classList.remove('tab__content_active');
    arrElemTab[index].classList.add('tab_active');
    arrElemContentTab[index].classList.add('tab__content_active');
  });
});



/* function EvenNumbers (element) {
  return element % 2 === 0;
};

const numbers1 = [1, 2, 5, 6, 8, 9];


console.log(numbers1.findIndex(EvenNumbers)); 

function EvenNumbers (element) {
   return element % 10 === 0;
};

const numbers = [1, 2, 5, 6, 8, 9, 10];


console.log(numbers.findIndex(EvenNumbers)); 
 */