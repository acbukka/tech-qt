'use strict'
// мне просто нужно написать функцию, которая будет рандомно вешать disabled на одну из трех последовательных карточек
const card = document.querySelector('.card-item');

card.addEventListener('click', (e) => {
  console.log(e.target.closest);
  // if (e.target)
})