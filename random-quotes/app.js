import { quotes,quoteSpan,authorSpan,generateBtn } from "./quotes.js";


const getRandom = (max,min) => Math.floor(Math.random() * (max-min)) + min;

const addQuote = ({quote,author}) => {
    quoteSpan.textContent = quote;
    authorSpan.textContent = `~ ${author}`;
}

const generateQuote = () => {
    const random = getRandom(quotes.length,0);
    addQuote(quotes[random]);
};

generateBtn.addEventListener('click',generateQuote);
