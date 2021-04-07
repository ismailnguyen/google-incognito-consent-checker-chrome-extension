var checkConsents = function () {
	if (!document) return;
		
	// youtube homepage 
	if (document.querySelector('*[aria-label^="Agree"]'))
		document.querySelector('*[aria-label^="Agree"]').click();

	// youtube video page
	if (document.querySelector('*[aria-label^="No"]'))
		document.querySelector('*[aria-label^="No"]').click();

	// google search page
	if (document.getElementById('zV9nZe'))
		document.getElementById('zV9nZe').click();
}

window.addEventListener('load', (event) => {
  checkConsents();
});
