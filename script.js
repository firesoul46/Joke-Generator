document.getElementById('jokeButton').addEventListener('click', async () => {
    try {
        const response = await fetch('https://v2.jokeapi.dev/joke/Any');
        const data = await response.json();
        
        let joke;
        if (data.type === 'single') {
            joke = data.joke;
        } else {
            joke = `${data.setup} - ${data.delivery}`;
        }

        document.getElementById('jokeDisplay').textContent = joke;
    } catch (error) {
        document.getElementById('jokeDisplay').textContent = 'Sorry, we could not fetch a joke at this time.';
    }
});
