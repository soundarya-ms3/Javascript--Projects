
let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes =[
    {
    "quote": "The only way to do great work is to love what you do.",
    "person": "Steve Jobs"
    },
    {
    "quote": "In three words I can sum up everything I've learned about life: it goes on.",
    "person": "Robert Frost"
    },
    {
    "quote": "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "person": "Winston Churchill"
    },
    {
    "quote": "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    "person": "Nelson Mandela"
    },
    {
    "quote": "Believe you can and you're halfway there.",
    "person": "Theodore Roosevelt"
    },
    {
    "quote": "In the end, it's not the years in your life that count. It's the life in your years.",
    "person": "Abraham Lincoln"
    },
    {
    "quote": "The only limit to our realization of tomorrow will be our doubts of today.",
    "person": "Franklin D. Roosevelt"
    },
    {
    "quote": "It does not matter how slowly you go as long as you do not stop.",
    "person": "Confucius"
    },
    {
    "quote": "The best way to predict the future is to create it.",
    "person": "Peter Drucker"
    },
    {
    "quote": "The journey of a thousand miles begins with one step.",
    "person": "Lao Tzu"
    },
    ];

btn.addEventListener('click',function(){
    let random = Math.floor(Math.random()* quotes.length);
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})