let a = document.getElementsByClassName('dropdown__value');
let b = document.querySelectorAll('ul');
let c = document.getElementsByClassName('dropdown__item');
let cArr = Array.from(c);
let link = document.querySelectorAll('a');


a[0].addEventListener('click', function () {
    b[0].classList.add('dropdown__list_active');

   /*  if () {
        a[0].textContent = c[].textContent;
        
    } */
});




console.log(cArr[1].textContent);
console.log(a[0].textContent);