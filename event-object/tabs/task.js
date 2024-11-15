const elemTab = document.querySelectorAll('.tab');
const arrElemTab = Array.from(elemTab);
const elemContentTab = document.querySelectorAll('.tab__content');
const arrElemContentTab = Array.from(elemContentTab);
const activeElem = document.querySelector('.tab_active');
const activeElemContent = document.querySelector('.tab__content_active');

arrElemTab.forEach((elem, index) => {
  elem.addEventListener('click', function () {
    arrElemTab[index].classList.add('tab_active');
    arrElemContentTab[index].classList.add('tab__content_active');
    activeElem.classList.remove('tab_active');
    activeElemContent.classList.remove('tab__content_active');
    return false;
  });
});
