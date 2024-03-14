const sliderBox = document.querySelector('.gallery__slider-box');
const buttonLeft = document.querySelector('.gallery__btn--left');
const buttonRight = document.querySelector('.gallery__btn--right');
const carouselImages = document.querySelectorAll('.gallery__slider-img');

const carouselWidth = 100;
const carouselSpeed = 3000;

let index = 0;

const handleCarousel = () => {
	index++;
};

const changeImages = () => {
	if (index > carouselImages.length - 1) {
		// buttonRight.setAttribute('disabled', 'true');
		index = 0;
	} else if (index < 0) {
		// buttonLeft.setAttribute('disabled', 'true');

		index = carouselImages.length - 1;
	}
	sliderBox.style.transform = `translateX(${-index * carouselWidth}%)`;
};

const changeImagesRight = () => {
	index++;
	changeImages();
};

const changeImagesLeft = () => {
	index--;
	changeImages();
};

buttonRight.addEventListener('click', changeImagesRight);
buttonLeft.addEventListener('click', changeImagesLeft);
