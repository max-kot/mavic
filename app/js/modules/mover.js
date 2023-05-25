const allMoveElements = document.querySelectorAll('[data-mover]');

allMoveElements.forEach((element) => {

	const dataArray = element.dataset.mover.split(', ');
	const parent = document.querySelector(dataArray[0]);
	const order = dataArray[1];
	const screen = dataArray[2];
	const oldSibling = element.nextElementSibling;
	const oldParent = element.parentElement;
	let matchMedia = window.matchMedia(`(max-width: ${screen}px)`);

	function moverHandler() {
		if (matchMedia.matches) {
			if (order === "first") {
				parent.insertAdjacentElement('afterbegin', element);
			} else {
				parent.insertAdjacentElement('beforeend', element);
			}
		} else {
			if (oldSibling !== null) {
				// если есть сосед то перемещай в перед соседом
				oldSibling.insertAdjacentElement('beforebegin', element);
			} else {
				// если нет соседа то перемещай в конец родителя
				oldParent.insertAdjacentElement('beforeend', element);
			}
		}
	};

	// запускаем сразу чтобы при загрузки страницы функция отработала
	moverHandler();
	// запучкаем отслеживание
	matchMedia.addListener(moverHandler);
})
