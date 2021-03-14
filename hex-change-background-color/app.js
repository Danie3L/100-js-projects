const btn = document.getElementById('btn');
const strong = document.getElementById('hex-value');
const chars = 'abcdef1234567890';
let hex = '#';

const getRandom = (min,max) => {
    return Math.floor(Math.random() * (max - min)) + min;
};


const changeBackgroundColor = () => {
    for(let i = 0; i<6; i++) {
        hex+=chars[getRandom(0,chars.length)];
    }
    strong.innerText = hex;
    document.body.style.backgroundColor = hex;
    hex  = '#';
};

btn.addEventListener('click',changeBackgroundColor);
