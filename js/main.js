// var wordCounter = {
//   sonnet: document.querySelector('.sonnet').innerText
// };

var sonnet = document.querySelector('.sonnet').innerText;

var words = {};

function wordCounter(str) {
return str.split(' ').length;
}
console.log(wordCounter(sonnet));

function strSplit(stringToSplit) {
var arrayString = stringToSplit.split(' ');
  return arrayString;
}

strSplit(sonnet).forEach(function countTheWords(each){
  if (words[each]){
    words[each]=words[each]+1;
  }
    else {
      words[each] = 1;
    }

  return console.log(words);
});



function epic(str) {
return str.replace(/[^qwertyuiopasdfghjklzxcvbnm " "]/gi, '');
   }

console.log(epic(sonnet));
