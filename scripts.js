/**
 * Verkefni 7 – Caesar dulmál
 */

const LETTERS = `AÁBDÐEÉFGHIÍJKLMNOÓPRSTUÚVXYÝÞÆÖ`;
let newLetters=LETTERS.split('');
console.log(newLetters);

/**
 * Byrja forrit.
 */
function start() {
  alert('Halló!')
  let spurning1 = prompt('Hvort viltu kóða eða afkóða streng? Skrifaðu „kóða“ eða „afkóða“');
  let checksvar = spurning1 == 'kóða' | 'afkóða' ? true : 'Veit ekki hvaða aðgerð „', $input, '“ er';
  console.log(checksvar)
  console.log('halló Einar')
}


// Hér er gott að commenta út til að vinna í encode/decode föllum fyrst og síðan „viðmóti“ forrits
start();

/**
 * Kóðar streng með því að hliðra honum um n stök.
 *
 * @param {string} str Strengur sem skal kóða, aðeins stafir í stafrófi
 * @param {number} n Hliðrun, heiltala á bilinu [0, lengd stafrófs]
 * @returns {string} Upprunalegi strengurinn hliðraður um n til hægri
 */
// GUMMI = ÍXÓÓK
function encode(str, n) {
  n=n%32;
  let upperCaseStr=str.toLocaleUpperCase();
  let newLetters=LETTERS.split('');
  let newStr1=str.split('');
  let newStr = '';


  for (let i=0; i<upperCaseStr.length; i++) {
    let currentLetter=upperCaseStr[i];
    if (currentLetter===' '){
      newStr+=currentLetter;
      continue;
    }
    let currentIndex=newLetters.indexOf(currentLetter);
    let newIndex=currentIndex+n;
    if(newIndex>31) {
      newIndex=newIndex-32;
    }
    if(newIndex<0) {
      newIndex=newIndex+32;
    }
    if(str[i]===str[i].toLocaleLowerCase()) {
      newStr+=newLetters[newIndex].toLocaleLowerCase();
    }
    else {
      newStr+=newLetters[newIndex];
    }

  }


  return newStr;
}

/**
 * Afkóðar streng með því að hliðra honum um n stök.
 *
 * @param {string} str Strengur sem skal afkóða, aðeins stafir í stafrófi
 * @param {number} n Hliðrun, heiltala á bilinu [0, lengd stafrófs]
 * @returns {string} Upprunalegi strengurinn hliðraður um n til vinstri
 */
function decode(str, n) {
  n=n%32;
  let upperCaseStr=str.toLocaleUpperCase();
  let newLetters=LETTERS.split('');
  let newStr1=str.split('');
  let newStr = '';

  for (let i=0; i<upperCaseStr.length; i++) {
    let currentLetter=upperCaseStr[i];
    if (currentLetter===' '){
      newStr+=currentLetter;
      continue;
    }
    let currentIndex=newLetters.indexOf(currentLetter);
    let newIndex=currentIndex-n;
    if(newIndex>31) {
      newIndex=newIndex-32;
    }
    if(newIndex<0) {
      newIndex=newIndex+32;
    }
    if(str[i]===str[i].toLocaleLowerCase()) {
      newStr+=newLetters[newIndex].toLocaleLowerCase();
    }
    else {
      newStr+=newLetters[newIndex];
    }

  }


  return newStr;

}

console.assert(encode('A', 3) === 'D', 'kóðun á A með n=3 er D');
console.assert(decode('D', 3) === 'A', 'afkóðun á D með n=3 er A');
console.assert(encode('AÁBDÐEÉFGHIÍJKLMNOÓPRSTUÚVXYÝÞÆÖ', 32) === 'AÁBDÐEÉFGHIÍJKLMNOÓPRSTUÚVXYÝÞÆÖ', 'kóðun með n=32 er byrjunarstrengur');
console.assert(encode('AÁBDÐEÉFGHIÍJKLMNOÓPRSTUÚVXYÝÞÆÖ', 3) === 'DÐEÉFGHIÍJKLMNOÓPRSTUÚVXYÝÞÆÖAÁB', 'kóðun á stafrófi með n=3');
console.assert(decode('DÐEÉFGHIÍJKLMNOÓPRSTUÚVXYÝÞÆÖAÁB', 3) === 'AÁBDÐEÉFGHIÍJKLMNOÓPRSTUÚVXYÝÞÆÖ', 'afkóðun á stafrófi með n=3');
console.assert(decode(encode('HALLÓHEIMUR', 13), 13) === 'HALLÓHEIMUR', 'kóðun og afkóðun eru andhverf');

