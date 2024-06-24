function smash(words) {
  smashedSentence = words.join(' ');

  return smashedSentence;
}

let wordsArray = ['hello', 'world', 'this', 'is', 'great'];
let resultSentences = smash(wordsArray);

console.log(resultSentences);
