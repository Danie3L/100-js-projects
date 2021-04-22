const leftButton = document.getElementById('left-btn');
const rightButton = document.getElementById('right-btn');
const slideImg = document.getElementById('slide-img');

let currentSlide = 0;

const getImagePath = (path) => {
  return path.replace(/[0-9]/g, currentSlide);
};

const displayFirstOrLastImage = (currentSlideNumber, newSlideNumber) => {
  if (currentSlide === currentSlideNumber) currentSlide = newSlideNumber;
};

const displayPrevImage = () => {
  displayFirstOrLastImage(0, 5);
  currentSlide--;
  slideImg.src = getImagePath('./img/contBcg-0.jpeg');
};

const displayNextImage = () => {
  displayFirstOrLastImage(4, -1);
  currentSlide++;
  slideImg.src = getImagePath('./img/contBcg-0.jpeg');
};

leftButton.addEventListener('click', displayPrevImage);
rightButton.addEventListener('click', displayNextImage);
