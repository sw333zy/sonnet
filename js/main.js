function countWords(string) {
  'use strict';
  var words = Object.create(null);
  var sonnetWords = string.split(/\s+/);
  for (var i = 0; i < sonnetWords.length; i++) {
    words[sonnetWords[i]] = (words[sonnetWords[i]] || 0) + 1;
  }
  string.replace(/[^qwertyuiopasdfghjklzxcvbnm ]/gi, '');
  return words;
}
countWords("From fairest creatures we desire increase, That thereby beauty's rose might never die,");

var sonnet = document.querySelector('.sonnet').innerText;
console.log( countWords(sonnet) );
