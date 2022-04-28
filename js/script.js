
let lineAct = document.querySelector('.line');
let menuOpen = document.querySelector('.mobile-navigation-menu');


document.querySelector('.byrger-menu').onclick = () => {
  lineAct.classList.toggle('Act');
  menuOpen.classList.toggle('actMenu');
}

document.querySelector('.catalog').onclick = () => {
        menuOpen.classList.toggle('actMenu');
        lineAct.classList.toggle('Act');
}

document.querySelector('.catalog-home').onclick = () => {
        menuOpen.classList.toggle('actMenu');
        lineAct.classList.toggle('Act');
}
