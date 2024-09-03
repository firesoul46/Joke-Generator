const jokes = [
    "Teri aankhon ka jaadu, mere dil ko bhaaye,Teri muskaan ki khushboo, mere khwaabon mein samaaye.",
    "Ek tera naam rahe Zubaan per ,Jaise chand rehta hai Asmaan per.",
    "Meri Duniya Hai Waha Tak ,Tera Sath Hai Jaha Tak.",
    "Mat Pooch Mere Dil Ko Kya Ho Gaya ,Tujhe Dekhte Hi Tera Ho Gaya",
    "Ek Tu Hi Hai Aadat Meri ,Is Dil Ko Hai Zaroorat Teri",
    "Life is God’s novel.Let him write it.",
    "Life isn't about finding yourself. Life is about creating yourself.",
    "Woh Bewafa Hai To Kya Hua Mat Bura Kaho Usko; Tum Mujhsey Set Ho Jaao Daffaa Karo Usko.",
    "Ajeeb Hai Aadat aur Gajab Hai Fitrat ,Mohabbat Ho Ya Nafrat Ho ,Badi Shiddat Se Karten Hain",
    "Kehne Lagi Hai Meri Tanhaai Mujhse ,Mujhse Hi Kar Lo Muhabbat Me To Be-Wafaa Nahi",
    "suno naa .Har roz rula dete ho ,kya mere dard se dard nahi hota tumhe?",
    "Shaam Hote Hi Chiragon Ko Bujha Deta Hoon ,Yeh Dil Hi Kaafi Hai Teri Yaad Main Jalne Ke Liye.",
    "Broken heart's are the strongest,Because no one can break it again."
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

    // Change the background color with animation
    document.body.classList.add('change-background');

    // Remove the class after the animation duration
    setTimeout(() => {
        document.body.classList.remove('change-background');
    }, 
