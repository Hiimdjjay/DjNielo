const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const phoneInput = document.querySelector('#phone');
const dateInput = document.querySelector('#date');
const messageInput = document.querySelector('#message');
const popUp = document.querySelector('.contact__pop-up');
const btnClear = document.querySelector('.contact__button--clear');
const btnSubmit = document.querySelector('.contact__button--submit');

// const showError = (input, msg) => {
// 	const formBox = input.parentElement;
// 	const text = formBox.querySelector('.contact__box-error');

// 	formBox.classList.add('error');
// 	text.textContent = msg;
// };

const clearError = input => {
	const formBox = input.parentElement;
	formBox.classList.remove('error');
};

// const checkForm = input => {
// 	input.forEach(el => {
// 		if (el.value === '') {
// 			showError(el, el.placeholder);
// 		} else {
// 			clearError(el);
// 		}
// 	});
// };

// const checkLength = (input, min) => {
// 	if (input.value.length < min) {
// 		const prev = input.previousElementSibling;
// 		const name2 = prev.innerText.slice(1, -1).toLowerCase();

// 		const name1 = prev.innerText.slice(0, 1);
// 		const last = `${name1}${name2}`;

// 		if (input == nameInput) {
// 			showError(input, `${last} musi zawierać minimalnie ${min} znaki`);
// 		} else if (input == messageInput) {
// 			showError(input, `Wiadomość musi zawierać minimalnie ${min} znaków`);
// 		}
// 	}
// };

// const checkEmail = input => {
// 	const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

// 	if (re.test(input.value)) {
// 	} else {
// 		showError(email, 'Email jest niepoprawny');
// 	}
// };

// const checkErrors = () => {
// 	const allInputs = document.querySelectorAll('.contact__box');
// 	let errorCount = 0;

// 	allInputs.forEach(el => {
// 		if (el.classList.contains('error')) {
// 			errorCount++;
// 		}
// 	});

// 	if (errorCount === 0) {
// 		popUp.style.visibility = 'visible';
// 	}
// };

// btnSubmit.addEventListener('click', e => {
// 	e.preventDefault();
// 	checkForm([nameInput, emailInput, dateInput, messageInput]);
// 	checkLength(nameInput, 3);
// 	checkEmail(emailInput);
// 	checkLength(messageInput, 10);
// 	checkErrors();
// });

btnClear.addEventListener('click', e => {
	e.preventDefault();
	[nameInput, emailInput, dateInput, messageInput].forEach(el => {
		el.value = '';
		clearError(el);
	});
});

// // Dodatkowa funkcja

if (document.location.search == '?mail_status=sent') {
	alert('Wiadomość została wysłana');
}

if (document.location.search == '?mail_status=error') {
	alert('Wiadomość nie została wysłana, popraw błędy!');
}
