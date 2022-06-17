'use strict'
// мне просто нужно написать функцию, которая будет рандомно вешать disabled на одну из трех последовательных карточек
const card = document.querySelectorAll('.card-item');


card.forEach((item) => item.addEventListener('click', (e) => {
  const element = e.target.closest('.card-item');
  console.log(card.length);
  if (element.classList.contains('selected')) {
    element.classList.remove('selected')
  } else if (!element.classList.contains('selected') && !element.classList.contains('disabled')){
    element.classList.add('selected')
  }
  if (element.classList.contains('disabled')) {
    element.removeEventListener();
  }
}))

const randomDis = () => {
  let num = 0;
  for (let i = 0; i < card.length; i += 1) {
    newArr = (Math.trunc(Math.random() * 3) + 1)
  }
  card[num].classList.add('disabled');
}

document.addEventListener('DOMContentLoaded', randomDis)