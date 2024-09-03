const jokes = [
    "Teri aankhon ka jaadu, mere dil ko bhaaye,Teri muskaan ki khushboo, mere khwaabon mein samaaye.",
    "Ek tera naam rahe Zubaan per ,Jaise chand rehta hai Asmaan per.",
    "Meri Duniya Hai Waha Tak ,Tera Sath Hai Jaha Tak.",
    "Mat Pooch Mere Dil Ko Kya Ho Gaya ,Tujhe Dekhte Hi Tera Ho Gaya",
    "Ek Tu Hi Hai Aadat Meri ,Is Dil Ko Hai Zaroorat Teri",
    "Life is God’s novel.Let him write it.",
    "Dua hay ki a 4 saal ka pyar dukh dard ka badla mai, baccha nikalko karun ",
    "I cant Lose You",
    "Your my therapist",
    "Tum the Tum ho Hamesha tumhech rehtin ,No matter what !!!",
    "Jasoosi nai vo deewangi vo !!!",
    "You know me i dont give up early",
    "Tumhare khushi ke age kya be nai "'
    "Dooooooooooorrrrrr se Pyar kartun tumna mlm b nai hona ",
    "This website is just for you meri jaan",
    "Trying to express some of my feelings ",
    "New generation ka love letter samjho 😁",
    "chahun tumhe jaise koi bacha khilona chahe ",
    "Betu literally , Hang over teri baton ka ,Hang over teri yadoon ka ",
    "Tumhare piche ata ni mai,Ab sirf allah sech mangta so dekhinge tumhe kaisa mere kane wapas ate ni 😉",
    "Malum mai chutiya karko kya mile bakrun ider b ",
    "suno naa .Har roz rula dete ho ,kya mere dard se dard nahi hota tumhe?",
    "Ketti yaaaaaad ariye malum tumhari 😶",
    "May this distance get Killed soon or else me 🙃",
    "Mai tumna baddua dia ni kya chiz ku be ghusse me bolya rahinga ,But dil se how much praying ALLAH know's",
    "I can never think anything wrong about you ,You know better ghuse me ekich i say ,vo be just to show im angry on you ",
    "Thank you for making my life beatiful ❤️",
    "Tumhe ❤️,Tumhari Khushi 😊, Your health matter's",
    "Meri yaad ayi to khudka Khayal rakho ",
    "Tumhe meri Soch ,Koi tumhe soche kyun? Tum meri Chahat ho ,Koi tumhe chahe kyun? Tum meri dua ho ,Koi tumhe mange kyun?",
    "Dil tu Jaan tu Dard ki dawa tu Jab tak me jina mere jine ki wajah tu ❤️",
    
      
    "Shaam Hote Hi Chiragon Ko Bujha Deta Hoon ,Yeh Dil Hi Kaafi Hai Teri Yaad Main Jalne Ke Liye."
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
