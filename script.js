const jokes = [
    "Teri aankhon ka jaadu, mere dil ko bhaaye, Teri muskaan ki khushboo, mere khwaabon mein samaaye.",
    "Ek tera naam rahe Zubaan per, Jaise chand rehta hai Asmaan per.",
    "Meri Duniya Hai Waha Tak, Tera Sath Hai Jaha Tak.",
    "Mat Pooch Mere Dil Ko Kya Ho Gaya, Tujhe Dekhte Hi Tera Ho Gaya.",
    "Ek Tu Hi Hai Aadat Meri, Is Dil Ko Hai Zaroorat Teri.",
    "Life is God’s novel. Let him write it.",
    "Dua hai ki char saal ka pyar, dukh ,dard ka badla, baccha nikalko karun.",
    "I can't lose you.",
    "You're my therapist.",
    "Tum the, Tum ho, Hamesha tumhech rehtin, No matter what!!!",
    "Jasoosi nai vo deewangi vo!!!",
    "You know me, I don't give up easily.",
    "Tumhari khushi ke aage kuch bhi nahi.",
    "Doooooooooooor se Pyar kartun tumna maloom b nai hona.",
    "This website is just for you, meri jaan.",
    "Trying to express some of my feelings.",
    "New generation ka love letter samjho 😁.",
    "Chahun tumhe jaise koi bacha khilona chahe.",
    "Betu literally, Hang over teri baton ka, Hang over teri yadoon ka.",
    "Tumhare piche ata ni mai, Ab sirf Allah se mangta so dekhinge tumhe kaisa mere kane wapas ate ni 😉.",
    "Malum mai chutiya karke kya mile bakrun ider b.",
    "Suno naa. Har roz rula dete ho, kya mere dard se dard nahi hota tumhe?",
    "Kitni yaad aa rahi hai maloom tumhari 😶.",
    "May this distance get killed soon or else me 🙃.",
    "Mai tumhe baddua nahi diya, ghusse mein bol diya, but dil se how much praying Allah knows.",
    "I can never think anything wrong about you, you know better ghusse mein ekich i say, vo bhi just to show I'm angry at you.",
    "Thank you for making my life beautiful ❤️.",
    "Tumhe ❤️, Tumhari Khushi 😊, Your health matters.",
    "Meri yaad aayi to khud ka khayal rakho.",
    "Tumhe meri soch, koi tumhe soche kyun? Tum meri chahat ho, koi tumhe chahe kyun? Tum meri dua ho, koi tumhe maange kyun?",
    "Dil tu, Jaan tu, Dard ki dawa tu, Jab tak main jeena, mere jeene ki wajah tu ❤️.",
    "Shaam hote hi chiragon ko bujha deta hoon, yeh dil hi kaafi hai teri yaad mein jalne ke liye."
];

const colors = [
    'red', 'blue', 'green', 'purple', 'yellow', 'lime', 'black', 'skyblue', 'navyblue'
];

let currentColorIndex = 0;

function generateJoke() {
    const jokeElement = document.getElementById('joke');
    const randomIndex = Math.floor(Math.random() * jokes.length);
    jokeElement.textContent = jokes[randomIndex];
    jokeElement.classList.add('fadeIn');

    // Remove the class after the animation to allow it to run again next time
    setTimeout(() => {
        jokeElement.classList.remove('fadeIn');
    }, 1000);

    // Change the background color instantly
    document.body.style.backgroundColor = colors[currentColorIndex];
    
    // Update color index for the next click
    currentColorIndex = (currentColorIndex + 1) % colors.length;
}
