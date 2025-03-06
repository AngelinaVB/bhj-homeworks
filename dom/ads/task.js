const b = Array.from(document.querySelectorAll('.rotator__case'))
const a = Array.from(document.querySelectorAll('.rotator'));

console.log(a);
console.log(b);


function intervalFunc() {
    b.forEach((elem, index) => {
        console.log(index);
        console.log(elem);
        function indexActive(element) {return element.classList.contains('rotator__case_active') };
        let idElem = b.findIndex(indexActive);
        const randomIndex = Math.floor(Math.random() * (b.length - 1));

        b[idElem].classList.remove('rotator__case_active');


        b[randomIndex].classList.add('rotator__case_active');
    });
};


setInterval(intervalFunc, 1000);