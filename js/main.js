function countWords() {
  'use strict';
  var sonnet = document.querySelector('.sonnet').innerText;
  var words = Object.create(null);
  var sonnetWords = sonnet.split(/\s+/);
  var wordLength = sonnetWords.length;
  for (var i = 0; i < sonnetWords.length; i++) {
    words[sonnetWords[i]] = (words[sonnetWords[i]] || 0) + 1;
  }
  var replace = sonnet.replace(/[^qwertyuiopasdfghjklzxcvbnm ]/gi, '');
  return console.log(wordLength, words, replace);
}
countWords();
countWords();
