const counter = document.getElementById('counter');
const addBtn = document.getElementById('add-btn');
const subtractBtn = document.getElementById('subtract-btn');
let count = 0;

const updateCounter  = () => {
  counter.textContent = String(count);
};

const incrementCount = () => {
    count++;
    updateCounter();
};

const decrementCount = () => {
    count--;
    updateCounter();
}

addBtn.addEventListener('click' , incrementCount);
subtractBtn.addEventListener('click',decrementCount);

