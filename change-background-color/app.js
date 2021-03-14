const btn = document.getElementById('btn');

const colors = ['red','yellow','#2b3097','#3aaecb','rgba(178, 221, 242, 1)'];

const getRandom = (min,max) => {
    return Math.floor(Math.random() * (max-min)) + min;
};

const changeBackgroundColor = () => {
    const random = getRandom(0,colors.length);
    document.body.style.backgroundColor = colors[random];
};

btn.addEventListener('click',changeBackgroundColor);
