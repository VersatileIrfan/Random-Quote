const quotes = [
    "The best way to predict the future is to create it.",
    "Success is not the key to happiness. Happiness is the key to success.",
    "Believe in yourself and all that you are.",
    "Don't watch the clock; do what it does. Keep going.",
    "You are never too old to set another goal or to dream a new dream."
];

document.getElementById("new-quote").addEventListener("click", function() {
    let randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").innerText = quotes[randomIndex];
});
