const api_url = "https://api.quotable.io/random";
const quota = document.querySelector("#quote")
const author = document.querySelector("#author")
const btnNewQuote = document.querySelector("#btnNewQuote")
const btnTweet = document.querySelector("#btnTweet")

btnNewQuote.addEventListener("click", newQuote)
btnTweet.addEventListener("click", tweet)

function newQuote() {
    getQuote(api_url)
}

getQuote(api_url)

async function getQuote(url) {
    const response = await fetch(url);
    var data = await response.json();
    // console.log(data);
    quota.textContent = data.content
    author.textContent = data.author
}

function tweet() {
    window.open("https://twitter.com/intent/tweet?text=" + quota.textContent + "---- by  " + author.textContent, "Tweet Window", "width=600px, height=300px");
}






