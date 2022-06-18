'use strict'
// пишем функцию, которая будет рандомно вешать disabled на одну из трех последовательных карточек
const card = document.querySelectorAll('.card-item');
const cardInfo = document.querySelector('.card-inner__info')

card.forEach((item) => item.addEventListener('click', (e) => {
  const element = e.target.closest('.card-item');
  console.log(card.findIndex(element));
  if (element.classList.contains('selected')) {
    element.classList.remove('selected')
  } else if (!element.classList.contains('selected') && !element.classList.contains('disabled')){
    element.classList.add('selected')
    // if ()
    // cardInfo.textContent = ''
  }
}))

const randomDis = () => {
  let num = 0;
  for (let i = 0; i < card.length; i += 1) {
    num = (Math.trunc(Math.random() * 3) + 1)
  }
  card[num - 1].classList.add('disabled');
}

document.addEventListener('DOMContentLoaded', randomDis)