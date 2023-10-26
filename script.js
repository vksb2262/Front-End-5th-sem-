const apiUrl = 'https://api.quotable.io/random';

async function fetchRandomQuote() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        const randomQuote = data;

        document.getElementById("quote-text").textContent = randomQuote.content;
        document.getElementById("author").textContent = randomQuote.author || "Unknown";

    } catch (error) {
        console.error('Error fetching a quote:', error);
        document.getElementById("quote-text").textContent = "Failed to fetch a quote.";
    }
}

fetchRandomQuote();

document.getElementById("new-quote").addEventListener("click", fetchRandomQuote);
