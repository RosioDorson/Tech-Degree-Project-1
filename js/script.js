/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
Rosio Dorson
******************************************/

// Create an array of objects to hold quotes //

var quotes = [
  {
    quote: 'How did it get so late so soon? Its night before its afternoon. December is here before its June. My goodness how the time has flewn. How did it get so late so soon?',
    source: ' Dr.Suess '
  },
  {
    quote: 'Today I shall behave, as if this is the day I will be remembered.',
    source: ' Dr.Suess '
  },
  {
    quote: 'I meant what I said and I said what I meant.',
    source: ' Dr.Suess '
  },
  {
    quote: 'You’re off to Great Places! Today is your day! Your mountain is waiting, So… get on your way!',
    source: ' Dr.Suess '
  },
  {
    quote: 'Don’t cry because it’s over. Smile because it happened.',
    source: ' Dr.Suess '
  },
  {
    quote: 'You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.',
    source: ' Dr.Suess ',
    citation: '"Oh, The Places You\'ll Go"', 
    year: "(1990)" 
  },
  {
    quote: 'When he worked, he really worked. But when he played, he really PLAYED.',
    source: ' Dr.Suess'
  },
];

console.log(quotes);

// Create a function to pull quotes from the array randomly //

function getRandomQuote(){
  randomQuote = Math.floor( Math.random() * quotes.length)
  return quotes[randomQuote]
};

// Prints the quotes to the page with my quotes first //

function printQuote() {
  string = getRandomQuote();
  html = '<p class="quote">' + string.quote + '</p>' + '<p class="source">' + string.source 
  if ("citation" in string) {
    html += '<span class="citation">' + string.citation + '</span>'
  }
  if ("year" in string) {
    html += '<span class="year">' + string.year + '</span>'
  }
  html += '</p>';
  document.getElementById('quote-box').innerHTML = html;
  return html;
};

// create a function to display a different color randomly //

function getRandomColor() {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  var color = "rgb(" + red + "," + green + "," + blue + ")";
  return color;
}

// Creates a different background color randomly //

function diffBackground() {
  document.body.style.backgroundColor = getRandomColor();
  document.getElementById('loadQuote').style.backgroundColor = getRandomColor();
}

// Changes the background color after amount of time has passed //

setInterval(printQuote, 5000)
setInterval(diffBackground, 5000)

// Code to change the background color and quote //

document.getElementById('loadQuote').addEventListener("click", diffBackground, false);
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
