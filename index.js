var words = document.getElementsByClassName("word");
var wordArray = [];
var currentWord = 0;

words[currentWord].style.opacity = 1;
for (var i = 0; i < words.length; i++) {
  splitLetters(words[i]);
}

function changeWord() {
  var cw = wordArray[currentWord];
  var nw =
    currentWord == words.length - 1 ? wordArray[0] : wordArray[currentWord + 1];
  for (var i = 0; i < cw.length; i++) {
    animateLetterOut(cw, i);
  }

  for (var i = 0; i < nw.length; i++) {
    nw[i].className = "letter behind";
    nw[0].parentElement.style.opacity = 1;
    animateLetterIn(nw, i);
  }

  currentWord = currentWord == wordArray.length - 1 ? 0 : currentWord + 1;
}

function animateLetterOut(cw, i) {
  setTimeout(function () {
    cw[i].className = "letter out";
  }, i * 80);
}

function animateLetterIn(nw, i) {
  setTimeout(function () {
    nw[i].className = "letter in";
  }, 340 + i * 80);
}

function splitLetters(word) {
  var content = word.innerHTML;
  word.innerHTML = "";
  var letters = [];
  for (var i = 0; i < content.length; i++) {
    var letter = document.createElement("span");
    letter.className = "letter";
    letter.innerHTML = content.charAt(i);
    word.appendChild(letter);
    letters.push(letter);
  }

  wordArray.push(letters);
}

changeWord();
setInterval(changeWord, 4000);

// card animation script
const cardGroup = document.getElementById("cardGroup");
const card2 = document.querySelector(".card2");
const card3 = document.querySelector(".card3");

card2.addEventListener("mouseenter", () => {
  cardGroup.classList.remove("card3-active");
  cardGroup.classList.add("card2-active");
});

card2.addEventListener("mouseleave", () => {
  cardGroup.classList.remove("card2-active");
});

card3.addEventListener("mouseenter", () => {
  cardGroup.classList.remove("card2-active");
  cardGroup.classList.add("card3-active");
});

card3.addEventListener("mouseleave", () => {
  cardGroup.classList.remove("card3-active");
});

// reset the form fields when the user clicks the submit button
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  this.reset();
});
