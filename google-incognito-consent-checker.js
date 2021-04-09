var checkConsents = function () {
	if (!document || !document.location || !document.location.origin) return;
		
	// Youtube
	if (document.location.origin.indexOf('youtube.com') > -1) {
		// Homepage
		if (document.querySelector('*[aria-label^="Agree"]'))
			document.querySelector('*[aria-label^="Agree"]').click();

		// Video page
		if (document.querySelector('*[aria-label^="No"]'))
			document.querySelector('*[aria-label^="No"]').click();
	}
		
	// Google
	if (document.location.origin.indexOf('google.com') > -1) {
		// Search page
		if (document.getElementById('zV9nZe'))
			document.getElementById('zV9nZe').click();
	}	
}

window.addEventListener('load', (event) => {
  checkConsents();
});
