const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');

function newQuote () {
  const quote = localQutotes[Math.floor(Math.random() * localQutotes.length)];
  if (!quote.author) {
    authorText.textContent = 'Unknown';
  }else {
    authorText.textContent = quote.author;
  }
  if (quote.text.length > 50) {
    quoteText.classList.add('long-quote');
  }else {
    quoteText.classList.remove('long-quote');
  }
  quoteText.textContent = quote.text;
}

function tweetQuote() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
  window.open(twitterUrl, 'blank');
}

//Event Listeners
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote)

//On Load
newQuote();

