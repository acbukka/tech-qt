'use strict'
// пишем функцию, которая будет рандомно вешать disabled на одну из трех последовательных карточек
const card = document.querySelectorAll('.card-item');
const cardInfo = document.querySelectorAll('.card-inner__info')
const cardInfoSpan = document.querySelectorAll('.card-item__title-span')


card.forEach((item) => item.addEventListener('click', (e) => {
  const element = e.target.closest('.card-item');
  console.log(element);
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
  console.log(cardInfoSpan[num - 1]);
  // cardInfo[num - 1].textContent = `Печалька, c ${cardInfoSpan[num - 1]} закончился.`;
  
}

document.addEventListener('DOMContentLoaded', randomDis)