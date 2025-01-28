const elemTab = document.querySelectorAll('.tab');
const arrElemTab = Array.from(elemTab);
const elemContentTab = document.querySelectorAll('.tab__content');
const arrElemContentTab = Array.from(elemContentTab);


arrElemTab.forEach((elem, index) => {

  elem.addEventListener('click', function () {
    function indexActive(element) { return element = Array.from(document.getElementsByClassName('tab_active')) };

    let idElem = arrElemTab.findIndex(indexActive);
   
  
    arrElemTab[idElem].classList.remove('tab_active');
    arrElemContentTab[idElem].classList.remove('tab__content_active');

    arrElemTab[index].classList.add('tab_active');
    arrElemContentTab[index].classList.add('tab__content_active');
  });

});

