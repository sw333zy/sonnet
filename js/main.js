(function () {
  'use strict';
  var sonnet = document.querySelector('.sonnet').innerText;
  var words = Object.create(null);
  var sonnetWords = sonnet.split(/\s+/);
  console.log(sonnetWords.length);
  for (var i = 0; i < sonnetWords.length; i++) {
    words[sonnetWords[i]] = (words[sonnetWords[i]] || 0) + 1;
    console.log(words);
  }
  console.log(sonnet.replace(/[^qwertyuiopasdfghjklzxcvbnm "']/gi, ''));
})();
