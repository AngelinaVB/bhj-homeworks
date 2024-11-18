const elemTab = document.querySelectorAll('.tab');
const arrElemTab = Array.from(elemTab);
const elemContentTab = document.querySelectorAll('.tab__content');
const arrElemContentTab = Array.from(elemContentTab);


arrElemTab.forEach((elem, index) => {
  const activeElem = document.querySelectorAll(`.tab_active${index}`);
  const arrActiveElem = Array.from(activeElem);
  const activeElemContent = document.querySelectorAll('.tab__content_active');
  const arrActiveElemContent = Array.from(activeElemContent);

  elem.addEventListener('click', function () {
    let indexActive = arrElemTab.findIndex((arrActiveElem) => arrActiveElem);
    console.log(arrElemTab);
    console.log(indexActive);

    arrElemTab[indexActive].classList.remove('tab_active');
    arrElemContentTab[indexActive].classList.remove('tab__content_active');

    arrElemTab[index].classList.add('tab_active');
    arrElemContentTab[index].classList.add('tab__content_active');

  });
});
