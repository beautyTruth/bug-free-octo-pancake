// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures

// Example 1
function book(name) {
  setTimeout(function otherBook() {
    console.log(name);
  }, 500);
}

book("The Two Towers");

// Example 2

function ask(question) {
  return function otherQuestion() {
    console.log(question);
  };
}

let myQuestion = ask("Really?");

myQuestion();
