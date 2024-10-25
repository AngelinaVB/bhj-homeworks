let a = document.getElementsByClassName('dropdown__value');
let aArr = Array.from(a);
let b = document.querySelectorAll('ul');
let bArr = Array.from(b);
let c = document.querySelectorAll('li');
let cArr = Array.from(c);

aArr[0].addEventListener('click', function () {
    bArr[0].classList.toggle('dropdown__list_active');

    for (let i = 0; i < 4; i++) {
        if (cArr[0].classList.contains('dropdown__list_active')) {
            aArr[0].textContent = cArr[i].textContent;
            alert(cArr[i]);
        }

    }
});
