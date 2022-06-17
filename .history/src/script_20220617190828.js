'use strict'
// мне просто нужно написать функцию, которая будет рандомно вешать disabled на одну из трех последовательных карточек
const card = document.querySelectorAll('.card-item');


card.forEach((item) => item.addEventListener('click', (e) => {
  if (e.target.closest('.card-item').classList.contains('selected')) {
    console.log('ye');
  } else {
    console.log('no');
  }
  console.log(e.target.closest('.card-item'));
}))
