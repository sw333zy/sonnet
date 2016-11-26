(function () {
  'use strict';
  var sonnet = document.querySelector('.sonnet').innerText;
  var words = Object.create(null); // if there were any object prototype methods in the sonnet

  function strSplit(stringToSplit) {
    return stringToSplit.split(/\s+/); //accounts for whitespace characters
  }
  function epic(str) {
    return str.replace(/[^qwertyuiopasdfghjklzxcvbnm "']/gi, '');
  }
  var sonnetWords = strSplit(sonnet); // dont split twice
  console.log(sonnetWords.length);
  sonnetWords.forEach(function countTheWords(each) {
    words[each] = (words[each] || 0) + 1; // undefined is falsy
    return console.log(words);
  });
  console.log(epic(sonnet));
})();
