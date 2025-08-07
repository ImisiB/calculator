let calculation = '';

const oldResult = localStorage.getItem('answers')

console.log(oldResult);


document.querySelector('.result')
  .innerHTML = oldResult;


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