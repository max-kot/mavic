const allSpoilerBtn = document.querySelectorAll('.spoiler__title');

allSpoilerBtn.forEach((spoiler) => {
	const spoilerParent = spoiler.parentElement;
	const spoilerContent = spoiler.nextElementSibling;
	
	if (spoilerParent.classList.contains('active')) {
		if (spoilerContent.style.maxHeight) {
			spoilerContent.style.maxHeight = null;
		} else {
			spoilerContent.style.maxHeight = spoilerContent.scrollHeight + 'px';
		}
	}

	spoiler.addEventListener('click', function() {
		this.classList.toggle('active');

		const spoilerParent = this.parentElement;
		spoilerParent.classList.toggle('active');

		const spoilerContent = this.nextElementSibling;

		if (spoilerContent.style.maxHeight) {
			spoilerContent.style.maxHeight = null;
		} else {
			spoilerContent.style.maxHeight = spoilerContent.scrollHeight + 'px';
		}
	})
})