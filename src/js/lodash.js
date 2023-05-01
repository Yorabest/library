import debounce from 'lodash.debounce';
import throttle from 'lodash.throttle';
import userInfo from './export-default'

// console.log(userInfo);

const coordsOutputRef = document.querySelector('.js-coords');
let mouseMoveCbInvocationCounter = 0;

window.addEventListener('mousemove', debounce(onMouseMove, 1000));
function onMouseMove(event) {
  mouseMoveCbInvocationCounter += 1;

  coordsOutputRef.textContent = `
    Кількість викликів onMouseMove: ${mouseMoveCbInvocationCounter},
    X: ${event.clientX},
    Y:${event.clientY}
  `;
}
/*
 * Input и debounce
 */
const inputRef = document.querySelector('.js-input');
const outputRef = document.querySelector('.js-output');
let inputCbInvocationCounter = 0;

inputRef.addEventListener('input', throttle(onInputChange, 1000));
function onInputChange(event) {
  inputCbInvocationCounter += 1;

  outputRef.textContent = `
    Кількість викликів onInputChange: ${inputCbInvocationCounter},
    Значення: ${event.target.value}
  `;
}