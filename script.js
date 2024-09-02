const jokes = [
    "Why don't scientists trust atoms? Because they make up everything!",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "Why don't skeletons fight each other? They don't have the guts.",
    "What do you call fake spaghetti? An impasta!",
    "Why did the bicycle fall over? It was two-tired!",
    "Why don't eggs tell jokes? Because they'd crack each other up!",
    "I told my wife she was drawing her eyebrows too high. She looked surprised."
];

function generateJoke() {
    const jokeElement = document.getElementById('joke');
    const randomIndex = Math.floor(Math.random() * jokes.length);
    jokeElement.textContent = jokes[randomIndex];
    jokeElement.classList.add('fadeIn');

    // Remove the class after the animation to allow it to run again next time
    setTimeout(() => {
        jokeElement.classList.remove('fadeIn');
    }, 1000);
}
