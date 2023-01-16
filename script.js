const num1 = document.querySelector('#num1')
const num2 = document.querySelector('#num2')
const znak = document.querySelector('#znak')
const btn = document.querySelector('button')
const pTag = document.querySelector('p')

let num3 = 0
let num4 = 0

let plus1 = 0
let minus1 = 0
let multiply1 = 0
let divide1 = 0
let znak1
let znak2

num1.addEventListener('input', (e) => {
  num3 = e.target.value
}) 

num2.addEventListener('input', (e) => {
  num4 = e.target.value
}) 

znak.addEventListener('input', (e) => {
  znak1 = e.target.value
}) 

btn.addEventListener ('click', () => {
  if (znak1 == '+') {
    pTag.innerText = Number(num3) + Number(num4)
  }
  else if (znak1 == '-') {
    pTag.innerText = num3 - num4
  }
  else if (znak1 == '*') {
    pTag.innerText = num3 * num4
  }
  else if (znak1 == '/') {
    pTag.innerText = num3 / num4
  }
  else if (znak1 == '%') {
    pTag.innerText = num3 % num4
  }
  else {
    pTag.innerText = 'Неправильный знак'
  }
})
