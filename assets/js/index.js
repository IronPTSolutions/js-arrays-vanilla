console.log('Hello World!');

function greet(names) {
  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    console.log(`Hello ${name}!`);
  }
}

function isVowel(char) {
  switch (char.toLowerCase()) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
      return true;
    default:
      return false;
  }
}

function countVowels(word) {
  let vowels = 0;
  for (let i = 0; i < word.length; i++) {
    const char = word[i];
    if (isVowel(char)) {
      vowels++;
    }
  }
  return vowels;
}

function getVowels(word) {
  const vowels = [];
  for (let i = 0; i < word.length; i++) {
    const char = word[i].toLowerCase();
    if (isVowel(char) && !vowels.includes(char)) {
      vowels.push(char);
    }
  }
  return vowels;
}

function reverse(word) {
  let reversedWord = '';
  for (let i = word.length - 1; i >= 0; i--) {
    const char = word[i];
    reversedWord = reversedWord + char;
  }
  return reversedWord;
}

function dropDuplicatedChars(word) {
  let cleaned = '';
  for (let i = 0; i < word.length; i++) {
    const char = word[i];
    if (!cleaned.includes(char)) {
      cleaned += char;
    }
  } 
  return cleaned;
}

function countWords(text) {
  let numberOfWords = 0;
  for (let i = 0; i < text.length; i++) {
    const previousChar = text[i - 1];
    const char = text[i];
    if ((char === ' ' && previousChar !== ' ' && previousChar) ||
     (i === text.length - 1 && char !== ' ')) {
      numberOfWords++;
    }
  } 
  return numberOfWords;
}

console.log(`Vowels of camino: ${countVowels('camino')}`);
console.log(`Vowels of camino: ${getVowels('camino')}`);
console.log(`Vowels of caminoooooo: ${getVowels('caminoooooo')}`);

console.log(`Number of words of 'Hello World': ${countWords('Hello World')}`);
console.log(`Number of words of '  Hello World  ': ${countWords('  Hello World  ')}`);
console.log(`Number of words of 'Hello       World': ${countWords('Hello       World')}`);
console.log(`Number of words of 'Hello': ${countWords('Hello')}`);
console.log(`Drop duplicates of caminoooooo: ${dropDuplicatedChars('caminoooooo')}`);
console.log(`Reversed word: hola: ${reverse('hola')}`)

const names = ['Carlos', 'Capi', 'Ramon', 'Pablo'];
greet(names);

let longestName;
for (let i = 0; i < names.length; i++) {
  const name = names[i];
  if (longestName === undefined || name.length > longestName.length) {
    longestName = name;
  }
}
console.log(`Longest name: ${longestName}`)


const numbers = [1, 2, 5, 4, 3, -1];

let min;
let max;
for (let i = 0; i < numbers.length; i++) {
  const number = numbers[i];
  if (min === undefined || number < min) {
    min = number;
  }
  if (max === undefined || number > max) {
    max = number;
  }
}
console.log(`Min number is: ${min}`)
console.log(`Max number is: ${max}`)



