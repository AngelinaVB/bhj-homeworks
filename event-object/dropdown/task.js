let selectValue = document.getElementsByClassName('dropdown__value');
let listValues = document.querySelector('ul');
let itemValue = document.getElementsByClassName('dropdown__item');
let itemValueArr = Array.from(itemValue);

selectValue[0].addEventListener('click', function () {
    listValues.classList.toggle('dropdown__list_active');
});

for (let i = 0; i < itemValueArr.length; i++) {
    itemValueArr[i].addEventListener('click', function (e) {
        const targetElem = e.target;
        const item = targetElem.closest('.dropdown__item')
        if (item === null) {
            return;
        }
        else {
            e.preventDefault();
            selectValue[0].textContent = itemValueArr[i].textContent;
            listValues.classList.toggle('dropdown__list_active');
        }
    })
}