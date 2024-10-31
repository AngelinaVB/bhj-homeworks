const elemTab = document.getElementsByClassName('tab');
const arrElemTab = Array.from(elemTab);
const elemContentTab = document.getElementsByClassName('tab__content');

console.log(elemTab);
console.log(elemContentTab);

let indexTab = arrElemTab.indexOf('');

elemTab[indexTab].addEventListener('click', function()
{ 
  elemTab.classList.add('tab_active');
});

console.log(elemTab[0].textContent);