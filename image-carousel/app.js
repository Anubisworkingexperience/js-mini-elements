const rightArrow = document.querySelector('.rightArrow');
const leftArrow = document.querySelector('.leftArrow');
const slidePoints = document.querySelectorAll('.slidePoint');
const sliderImage = document.querySelector('.slider-image');

let slidePointCounter = 1;

const changeSlideImages = function() {
  sliderImage.src = `./assets/cat${slidePointCounter}.jpg`;
};

let reverse = false;

const reverseConditionsCheck = function() {
  if (slidePointCounter === 3) {
    reverse = true;
  }
  if (reverse && slidePointCounter === 1) {
    reverse = false;
  }
}

const changeSlides = function() {
  reverseConditionsCheck();

  if (slidePointCounter < 3 && !reverse) {
    changeOneSlide();
  }
    else {
      if (slidePointCounter > 1 && reverse) {
        reverseChangeOneSlide();
  }
}
}

//auto change every 5 seconds
setInterval(changeSlides, 5000);

const changeSlidePoints = function(currentSlidePoint) {
  for (let i = 0; i < slidePoints.length; i++) {
    let slidePointNumber = i + 1;
    if (slidePointNumber === currentSlidePoint) {
      slidePoints[i].style.backgroundColor = 'orange';
    }
      else {
        slidePoints[i].style.backgroundColor = 'white';
      }
  }
};

const changeOneSlide = function() {
  slidePointCounter += 1;
  console.log(slidePointCounter);
  changeSlideImages();
  changeSlidePoints(slidePointCounter);
}

const reverseChangeOneSlide = function() {
  slidePointCounter -= 1;
  console.log(slidePointCounter);
  changeSlideImages();
  changeSlidePoints(slidePointCounter);
}

rightArrow.addEventListener('click', () => {
  if (slidePointCounter < 3) {
    changeOneSlide();
  }
});


leftArrow.addEventListener('click', () => {
  if (slidePointCounter > 1) {
    reverseChangeOneSlide();
  }
});

const onPointClickSlideChange = function() {
  for (let i = 0; i < slidePoints.length; i++) {
    slidePoints[i].addEventListener('click', (event) => {
      changeSlidePoints(i + 1);
      slidePointCounter = i + 1;
      changeSlideImages();
      console.log(slidePointCounter);
    })
  }
}

onPointClickSlideChange();
