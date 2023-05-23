//const phone = document.querySelector('.header__phone-link');
//const menu = document.querySelector('.menu');

//function removePhone(screen) {
//	if (screen.matches) {
//		menu.appendChild(phone);
//	}
//}
//let screen = window.matchMedia('(max-width: 1024px)');
//removePhone(screen);
//screen.addListener(removePhone);

const header = document.querySelector('.header');
const menu = document.querySelector('.menu');
const menuBtn = document.querySelector('.burger-menu');
const menuLinkAll = menu.querySelectorAll('a');
const body = document.body;
let lastScroll = 0;

menuBtn.addEventListener('click', function() {
	menu.classList.toggle('active');
	menuBtn.classList.toggle('active');
	header.classList.toggle('active');
	body.classList.toggle('no-scroll');

	menuLinkAll.forEach(function(link) {
		link.addEventListener('click', function() {
			menu.classList.remove('active');
			menuBtn.classList.remove('active');
			header.classList.remove('active');
			body.classList.remove('no-scroll');
		})
	})
})

window.addEventListener('scroll', () => {
	if (window.scrollY > '50') {
		header.classList.add('header--black');
	} else {
		header.classList.remove('header--black');
	}

	const currentScroll = window.pageYOffset;
		if (currentScroll <= 0) {
			body.classList.remove('scroll-up');
			return;
		}
		// Down
		if (currentScroll > lastScroll && !body.classList.contains('scroll-down')) {
			body.classList.remove('scroll-up');
			body.classList.add('scroll-down');
		}
		// Up
		if (currentScroll < lastScroll && body.classList.contains('scroll-down')) {
			body.classList.remove('scroll-down');
			body.classList.add('scroll-up');
		}
	
		lastScroll = currentScroll;
})