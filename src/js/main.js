//header btn
const btns = document.querySelectorAll('.header__btn');

//navigation
const hamburger = document.querySelector('.hamburger');
const hamburgerMenu = document.querySelector('.nav__items');
const allItems = document.querySelectorAll('.nav__item');
const navBar = document.querySelector('.nav');

//footer year

const year = document.querySelector('.footer__year');

//header btn
const showCircle = e => {
	let btnTopPosition = e.offsetY;
	let btnLeftPosition = e.offsetX;

	const circle = document.createElement('span');
	circle.classList.add('header__circle');

	circle.style.top = btnTopPosition + 'px';
	circle.style.left = btnLeftPosition + 'px';

	e.target.appendChild(circle);

	setTimeout(() => {
		circle.remove();
	}, 300);
};

//navigation
const showMenu = () => {
	hamburgerMenu.classList.toggle('show-menu');
	hamburger.classList.toggle('is-active');
};

const closeMenu = () => {
	hamburgerMenu.classList.remove('show-menu');
	hamburger.classList.remove('is-active');
};

const showBar = () => {
	const distanceY = Math.floor(window.scrollY);

	if (distanceY > 220) {
		navBar.classList.add('nav-shadow');
	} else if (distanceY < 220) {
		navBar.classList.remove('nav-shadow');
	}
};

//header btn
btns.forEach(btn => btn.addEventListener('click', showCircle));

//navigation
hamburger.addEventListener('click', showMenu);
allItems.forEach(item => item.addEventListener('click', closeMenu));
window.addEventListener('scroll', showBar);

//footer year

const newYearFunc = () => {
	let date = new Date();

	let newYear = date.getFullYear();
	console.log(date);
	year.textContent = newYear;
};

newYearFunc();
