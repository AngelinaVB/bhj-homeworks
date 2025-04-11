const a = Array.from(document.getElementsByClassName('has-tooltip'));

a.forEach((element, index) => {
element.addEventListener('click', function (event) {
   event.preventDefault();
   const b = document.createElement('div');
   b.classList.add('tooltip');
   
   b.textContent = `${a[index].title}`;
   document.body.appendChild(b);
   b.classList.remove('tooltip');
   b.classList.add('tooltip_active');
})
});
