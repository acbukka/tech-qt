'use strict'
// пишем функцию, которая будет рандомно вешать disabled на одну из трех последовательных карточек
const card = document.querySelectorAll('.card-item');
const cardInfo = document.querySelectorAll('.card-inner__info')
const cardInfoExample = document.querySelectorAll('.card-inner__info')
const cardInfoSpan = document.querySelectorAll('.card-item__title-span')


card.forEach((item) => item.addEventListener('click', (e) => {
  const element = e.target.closest('.card-item');
  const whatElement = Array.prototype.slice.call(card).indexOf(element);
  if (element.classList.contains('selected')) {
    element.classList.remove('selected')
    cardInfo[whatElement].textContent = 'Чего сидишь? Порадуй котэ, '
    let a = document.createElement('a');
    a.setAttribute('href', '#');
    a.className = 'card-inner__info-link';
    a.innerHTML = 'купи.';
    cardInfo[whatElement].appendChild(a);
  } else if (!element.classList.contains('selected') && !element.classList.contains('disabled')){
    element.classList.add('selected')
    switch (whatElement) {
      case 0:
        cardInfo[whatElement].textContent = 'Печень утки разварная с артишоками.'
        break
      case 1: 
        cardInfo[whatElement].textContent = 'Головы щучьи с чесноком да свежайшая сёмгушка.'
        break
      case 2:
        cardInfo[whatElement].textContent = 'Филе из цыплят с трюфелями в бульоне.'
        break
    }
  }
}))

const randomDis = () => {
  let num = 0;
  for (let i = 0; i < card.length; i += 1) {
    num = (Math.trunc(Math.random() * 3) + 1)
  }
  card[num - 1].classList.add('disabled');
  cardInfo[num - 1].textContent = `Печалька, ${cardInfoSpan[num - 1].textContent} закончился.`;
  cardInfo[num - 1].style.color = '#FFFF66'
}

document.addEventListener('DOMContentLoaded', randomDis)
