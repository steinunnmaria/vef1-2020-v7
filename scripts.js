/**
 * Verkefni 7 – Caesar dulmál
 */

const LETTERS = `AÁBDÐEÉFGHIÍJKLMNOÓPRSTUÚVXYÝÞÆÖ`;
let newLetters=LETTERS.split('');


/**
 * Byrja forrit.
 */
function start() {
  alert('Halló!')
  let spurning1 = prompt('Hvort viltu kóða eða afkóða streng? Skrifaðu „kóða“ eða „afkóða“');
  let coding = spurning1.toLocaleLowerCase() == 'kóða' | 'afkóða'? spurning1.toLocaleLowerCase() : codingCodeDecodeQuestion(spurning1.toLocaleLowerCase());
  let hlidrun = codingHlidrun();
  let string = codingString(coding, hlidrun);
  let result = coding == 'kóða' ? encode(string, hlidrun) : decode(string, hlidrun);


  console.log(result);
}

function codingCodeDecodeQuestion(svar) {
  let nyttSvar = prompt(`Veit ekki hvaða aðgerð „ ${svar} “ er. Reyndu aftur.`);
  let result = nyttSvar.toLocaleLowerCase() == 'kóða' | 'afkóða' ? true : codingCodeDecodeQuestion(nyttSvar);
  return result;
}

function codingHlidrun() {
  let spurning2 = prompt('Hversu mikið á að hliðra streng? Gefðu upp heiltölu á bilinu [1, 31]');
  let svar = Number.parseInt(spurning2);
  let result = Number.isInteger(svar) & svar > 0 & svar < 32 ? true : codingHlidrunRecursive(svar);
  return result;
}

function codingHlidrunRecursive(svar) {
  let nyttSvar = prompt(`${svar} er ekki heiltala á bilinu [1, 31]. Reyndu aftur`);
  svar = Number.parseInt(nyttSvar);
  let result = Number.isInteger(svar) & svar > 0 & svar < 32 ? true : codingHlidrunRecursive(svar);
  return result;
}

function codingString(action, n) {
  let spurning3 = prompt(`Gefðu upp strenginn sem á að ${action} með hliðrun ${n}:`);
  let svar = !Number.isInteger(spurning3) | spurning3 != '' ? true : codingStringRecursive(action, n, spurning3);
  return svar;
}

function codingStringRecursive(action, n, svar) {
  let nyttSvar = !Number.isInteger(svar)
  ? prompt(`Þú gafst ekki upp streng. Reyndu aftur. \n Gefðu upp strenginn sem á að ${action} með hliðrun ${n}:`)
  : prompt(`Þú gafst upp stafi sem ekki er hægt að ${action}: ${invalid.join(', ')}. Reyndu aftur. \n Gefðu upp strenginn sem á að ${action} með hliðrun ${n}:`);
  let result = !Number.isInteger(nyttSvar) | nyttSvar != '' ? true : codingStringRecursive(action, n, nyttSvar);
  return result;
}


// Gera nýja fallið með endurkvæmni .. kalla á sjálft sig til að reyna aftur

// Hér er gott að commenta út til að vinna í encode/decode föllum fyrst og síðan „viðmóti“ forrits

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
  console.log(str)
  let upperCaseStr = str.toLocaleUpperCase();
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

start();

console.assert(encode('A', 3) === 'D', 'kóðun á A með n=3 er D');
console.assert(decode('D', 3) === 'A', 'afkóðun á D með n=3 er A');
console.assert(encode('AÁBDÐEÉFGHIÍJKLMNOÓPRSTUÚVXYÝÞÆÖ', 32) === 'AÁBDÐEÉFGHIÍJKLMNOÓPRSTUÚVXYÝÞÆÖ', 'kóðun með n=32 er byrjunarstrengur');
console.assert(encode('AÁBDÐEÉFGHIÍJKLMNOÓPRSTUÚVXYÝÞÆÖ', 3) === 'DÐEÉFGHIÍJKLMNOÓPRSTUÚVXYÝÞÆÖAÁB', 'kóðun á stafrófi með n=3');
console.assert(decode('DÐEÉFGHIÍJKLMNOÓPRSTUÚVXYÝÞÆÖAÁB', 3) === 'AÁBDÐEÉFGHIÍJKLMNOÓPRSTUÚVXYÝÞÆÖ', 'afkóðun á stafrófi með n=3');
console.assert(decode(encode('HALLÓHEIMUR', 13), 13) === 'HALLÓHEIMUR', 'kóðun og afkóðun eru andhverf');

