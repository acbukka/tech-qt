'use strict'
// мне просто нужно написать функцию, которая будет рандомно вешать disabled на одну из трех последовательных карточек
const card = document.querySelectorAll('.card-item');


card.forEach((item) => item.addEventListener('click', (e) => {
  const element = e.target.closest('.card-item');
  console.log(element.classList.contains('selected'));
  // if (element.classList.contains('selected')) {
  //   element.classList.add('selected')
  // } else {
  //   element.classList.remove('selected')
  // }
}))
