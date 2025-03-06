const rotatorArray = Array.from(document.querySelectorAll('.rotator__case'))

function intervalFunc() {
    rotatorArray.forEach((elem, index) => {
        function indexActive(element) { return element.classList.contains('rotator__case_active') };
        let idElem = rotatorArray.findIndex(indexActive);
        const randomIndex = Math.floor(Math.random() * (rotatorArray.length - 1));

        rotatorArray[idElem].classList.remove('rotator__case_active');
        rotatorArray[randomIndex].classList.add('rotator__case_active');
    });
};

setInterval(intervalFunc, 1000);