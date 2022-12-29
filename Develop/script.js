const output = document.querySelector('#output')
const lengthPwd = document.querySelector('#lengthPwd')
const smallLetter = document.querySelector('#smallLetters')
const bigLetters = document.querySelector('#bigLetters')
const numbers = document.querySelector('#numbers')
const special = document.querySelector('#special')
const generate = document.querySelector('#generate')
const copy = document.querySelector('#copy')

const AsmallLettters = ['a','b','c','d','e','f','g','h','i','j','k','l',
'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];

const AbigLetters = ['A','B','C','D','E','F','G','H','I','J','K','L','M',
'N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

const Anumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const specialCharacters = ['~','!','@','#','$','%','^','&','*','(',')','_',
'-','=','+','<','>','|',];

generate.onclick = () => output.textContent = generatePwd
(lengthPwd.value)

copy.onclick = () => {
  window.navigator.clipboard.writeText(output.textContent)
  if (window.getSelection) {
    const sel = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(output)
    sel.removeAllRanges();
    sel.addRange(range);
  }
}

function getRandom(array) {
  const r = Math.floor(Math.random() * array.length)
  if (array) {
    return array [r]
  } else{
    return ''
  }
}

function generatePwd(Len) {
  let textPwd = '';
  const activeControls = [
    smallLetter.checked,
    bigLetters.checked,
    numbers.checked,
    special.checked
  ].filter (e => e)

  for (let i = 1; i <= Math.round( Len / activeControls.
  length); i++) {
    // this is to check that the values are being generated 
    //console.log(getRandom(AsmallLettters));
    textPwd += `${smallLetter.checked ? getRandom
    (AsmallLettters) : ''} ${bigLetters.checked ? getRandom
      (AbigLetters) : ''} ${numbers.checked ? getRandom
        (Anumbers) : ''} ${special.checked ? getRandom
          (specialCharacters) : ''}`
  }
  return textPwd
}