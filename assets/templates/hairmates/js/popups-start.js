/* ------------------- Крестик закрытия попапа -------------------- */
const popupClose = document.querySelectorAll('.popup-start__close');

// Закрываем попапы по нажатию на крестик
popupClose.forEach(button => {
	button.addEventListener('click', () => {
		cookiePopup.classList.remove('is-active'); 
		cookiePopup.classList.add('is-hidden'); 
		subscribePopup.classList.remove('is-active'); 
		subscribePopup.classList.add('is-hidden'); 
		document.body.style.overflow = 'auto'; 
	});
});

/* ------------------- COOKIEPOPUP -------------------- */
const cookiePopup = document.querySelector('.cookie-popup');
const acceptCookie = document.querySelector('#accept-cookie');
const cancelCookie = document.querySelector('#cancel-cookie');


// Показываем попап при открытии страницы и убираем прокрутку у body
if (cookiePopup.classList.contains('is-active')) { 
	document.body.style.overflow = 'hidden'; 
}

// Если кликнули на кнопку "Принять все", то закрываем попап и включаем прокрутку у body
acceptCookie.addEventListener('click', () => { 
	cookiePopup.classList.remove('is-active'); 
	cookiePopup.classList.add('is-hidden'); 
	document.body.style.overflow = 'auto'; 
});

// Если кликнули на кнопку "Отменить все", то закрываем попап и включаем прокрутку у body
cancelCookie.addEventListener('click', () => { 
	cookiePopup.classList.remove('is-active'); 
	cookiePopup.classList.add('is-hidden'); 
	document.body.style.overflow = 'auto'; 
});

/* ------------------- SUBSCRIBE -------------------- */
const subscribePopup = document.querySelector('.subscribe');
const subscribeClose = document.querySelector('#subscribe-close');

// Если у попапа с подпиской есть класс is-active, то отображаем его и убираем прокрутку у body 
if (subscribePopup.classList.contains('is-active')) { 
	document.body.style.overflow = 'hidden';
}

// Закрываем попап по нажатию на кнопку "Не сейчас"
subscribeClose.addEventListener('click', () => {
		subscribePopup.classList.remove('is-active'); 
		subscribePopup.classList.add('is-hidden'); 
		document.body.style.overflow = 'auto'; 
	});