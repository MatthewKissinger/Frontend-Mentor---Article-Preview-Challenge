const shareButtons = document.querySelectorAll('.sharebutton--background');

const shareContainer = document.querySelector('.share--container');

for (const shareButton of shareButtons) {
	shareButton.addEventListener('click', () => {
		shareContainer.classList.toggle('share--container--visible');
	});
}

