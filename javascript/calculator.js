let calculation = '';

const oldResult = localStorage.getItem('answers')


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

document.querySelector('body').addEventListener('keydown', (event) => {
  if(event.key === '1') {
    calculation += '1';
    answer();
  } else if(event.key === '2') {
    calculation += '2';
    answer();
  } else if(event.key === '3') {
    calculation += '3';
    answer();
  } else if(event.key === '4') {
    calculation += '4';
    answer();
  } else if(event.key === '5') {
    calculation += '5';
    answer();
  } else if(event.key === '6') {
    calculation += '6';
    answer();
  } else if(event.key === '7') {
    calculation += '7';
    answer();
  } else if(event.key === '8') {
    calculation += '8';
    answer();
  } else if(event.key === '9') {
    calculation += '9';
    answer();
  } else if(event.key === '+') {
    calculation += ' + ';
    answer();
  } else if(event.key === '-') {
    calculation += ' - ';
    answer();
  } else if(event.key === '/') {
    calculation += ' / ';
    answer();
  } else if(event.key === '*') {
    calculation += ' * ';
    answer();
  } else if(event.key === '.') {
    calculation += '.';
    answer();
  } else if(event.key === '>') {
    calculation += ' > ';
    answer();
  } else if(event.key === '<') {
    calculation += ' < ';
    answer();
  } else if(event.key === '=') {
    calculation += ' === ';
    answer();
  } else if(event.key === 'Backspace') {
    calculation = '';
    answer();
    localStorage.setItem('answers', '')
  } else if(event.key === 'Enter') {
    calculation = eval(calculation);
    calcResult();
    answer();
  }
})