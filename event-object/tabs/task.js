const elemTab = document.getElementsByClassName('tab');
const arrElemTab = Array.from(elemTab);
const elemContentTab = document.getElementsByClassName('tab__content');
const arrElemContentTab = Array.from(elemContentTab);
const activeElem = document.getElementsByClassName('tab_active');
const arrActiveElem = Array.from(activeElem);

arrElemTab.forEach(arrElemTab => {arrElemTab.addEventListener('click', function()
{ 
  if (arrElemTab.indexOf(activeElem) == -1) {
    return;
  }
  else {
  arrActiveElem.classList.remove('tab_active');
  arrElemTab.classList.add('tab_active');
  arrElemContentTab.classList.add('tab__content_active');
  };
});
});
