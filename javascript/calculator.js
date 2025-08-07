let calculation = '';

const oldResult = localStorage.getItem('answers')

console.log(oldResult);


document.querySelector('.result')
  .innerHTML = 32;


function answer() {
  document.querySelector('.js-result')
    .innerHTML = calculation;

}


function calcResult() {
  const result = calculation; 

  document.querySelector('.js-result')
    .innerHTML = result;
  localStorage.setItem('answers', JSON.stringify(result))
}